// Host half. Two jobs:
//   1. Ship the palette into the document before the first paint.
//   2. Serve the startup film the boot overlay plays.
//
// Two carriers, because the Desktop shell and the browser differ:
//   * Desktop (Electron) loads index.html from the packaged dist through
//     `dsh-app://app/`, so `webServer.tapIndex` never runs there. Its only
//     channel is the structured `webserver/index-inject` table, collected once
//     at Host startup and applied row by row by the renderer. A row is
//     `{ kind: 'script', placement: 'body', text }`, with the text run as an
//     inline script (a `script-src` row that fails would abort the whole boot).
//   * The browser form still renders through `webServer.renderIndex`, so the
//     same stylesheet is also injected through `tapIndex` there.
//
// The row must be registered synchronously at the very start of apply(): the
// Desktop table is collected once, and a subscriber that arrives after the
// collection never gets into it.

import { readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MEDIA_DIR = join(dirname(fileURLToPath(import.meta.url)), 'media');

const TOKENS = [
  ['--dsw-alias-bg-base', '#EEF3F6', '#06080D'],
  ['--dsw-alias-bg-layer-1', '#FFFFFF', '#0C131B'],
  ['--dsw-alias-bg-layer-2', '#F3F7F9', '#121C26'],
  ['--dsw-alias-bg-overlay', 'rgba(255, 255, 255, 0.96)', 'rgba(12, 19, 27, 0.94)'],
  ['--dsw-alias-border-l1', 'rgba(20, 64, 78, 0.14)', 'rgba(148, 196, 214, 0.18)'],
  ['--dsw-alias-border-l2', 'rgba(20, 64, 78, 0.24)', 'rgba(148, 196, 214, 0.34)'],
  ['--dsw-alias-brand-primary', '#17616F', '#5FD0E4'],
  ['--dsw-alias-label-primary', '#10202A', '#EAF3F6'],
  ['--dsw-alias-label-secondary', '#526B78', '#93A8B6'],
  ['--dsw-alias-state-error-primary', '#C42A4A', '#FF4D7D'],
  ['--dsw-alias-state-idle-primary', '#8A9AA4', '#5C6F7B'],
  ['--dsw-alias-state-success-primary', '#1F8A76', '#6FD3C0'],
  ['--dsw-alias-state-warn-primary', '#9A6A25', '#D9A15F'],
  ['--dsw-specific-sidebar-fill', '#E6EEF2', '#03050A'],
];

const lightBlock = TOKENS.map(([name, light]) => `  ${name}: ${light} !important;`).join('\n');
const darkBlock = TOKENS.map(([name, , dark]) => `  ${name}: ${dark} !important;`).join('\n');

const CSS = `/* In Falsus theme — palette layer. Light (paper white) is the default;
   dark is selected through the body attribute the ui-theme bootstrap sets. */
html:not([data-ds-dark-theme]) body:not([data-ds-dark-theme]) {
${lightBlock}
}
html[data-ds-dark-theme],
body[data-ds-dark-theme] {
${darkBlock}
}
html body {
  background-color: var(--dsw-alias-bg-base) !important;
  background-image:
    radial-gradient(1100px 720px at 92% -12%, rgba(95, 208, 228, 0.10), transparent 62%),
    radial-gradient(900px 640px at 4% 108%, rgba(255, 77, 125, 0.06), transparent 60%) !important;
  background-attachment: fixed !important;
}
/* Surfaces that paint their own fill would otherwise hide the base colour. */
main,
[role="main"] {
  background-color: var(--dsw-alias-bg-base) !important;
}
[data-slot="sidebar.brand.mark"] svg {
  width: 30px !important;
  height: 30px !important;
}
::selection {
  background-color: rgba(95, 208, 228, 0.28);
}
`;

const MARKER = 'data-in-falsus-theme';

// Runs in the page before the app boots and paints the palette early, so the
// first frame is already In Falsus rather than the shell default. The client
// half re-applies the same values once it loads.
const INLINE_SCRIPT = `(function(){try{
function applyStyle(){
  if(document.querySelector('style['+${JSON.stringify(MARKER)}+']'))return;
  var s=document.createElement('style');
  s.setAttribute('${MARKER}','');
  s.textContent=${JSON.stringify(CSS)};
  (document.head||document.documentElement).appendChild(s);
}
applyStyle();
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',applyStyle);}
}catch(e){}})()`;

export function apply(root) {
  root.effect(() => root.on('webserver/index-inject', (table) => {
    try {
      if (!Array.isArray(table)) return;
      for (const row of table) {
        if (row && row.kind === 'script' && typeof row.text === 'string' && row.text.includes(MARKER)) {
          return;
        }
      }
      table.push({ kind: 'script', placement: 'body', text: INLINE_SCRIPT });
    } catch {
      // the injection table is a boot-time contract; never throw into it
    }
  }));

  root.inject(['webServer'], (ctx) => {
    // Startup films for the boot overlay, served from the package itself so the
    // client can point a <video> at a same-origin path.
    ctx.effect(() => ctx.webServer.register({
      kind: 'prefix',
      path: '/in-falsus/media',
      handler: (req, res) => {
        const url = new URL(req.url || '/', 'http://localhost');
        const name = url.pathname.slice('/in-falsus/media/'.length);
        if (!/^[A-Za-z0-9._-]+$/.test(name)) {
          res.writeHead(400, { 'access-control-allow-origin': '*' });
          res.end();
          return;
        }
        try {
          const file = join(MEDIA_DIR, name);
          const stat = statSync(file);
          const body = readFileSync(file);
          res.writeHead(200, {
            'content-type': 'video/mp4',
            'content-length': String(stat.size),
            'cache-control': 'no-store',
            'accept-ranges': 'none',
            'access-control-allow-origin': '*',
          });
          res.end(body);
        } catch {
          res.writeHead(404, { 'access-control-allow-origin': '*' });
          res.end();
        }
      },
    }));

    ctx.effect(() => ctx.webServer.tapIndex((html) => {
      if (html.includes(MARKER)) return html;
      const tag = `<style ${MARKER}>${CSS}</style>`;
      return html.includes('</head>')
        ? html.replace('</head>', `${tag}</head>`)
        : `${tag}${html}`;
    }));
  });
}
