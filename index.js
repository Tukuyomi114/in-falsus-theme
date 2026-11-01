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
  ['--dsw-alias-bg-base', '#200A0E', '#0A1520'],
  ['--dsw-alias-bg-layer-1', '#280E13', '#0E1B28'],
  ['--dsw-alias-bg-layer-2', '#34141A', '#142434'],
  ['--dsw-alias-bg-overlay', 'rgba(32, 10, 14, 0.95)', 'rgba(10, 21, 32, 0.95)'],
  ['--dsw-alias-bg-mask-1', 'rgba(64, 20, 36, 0.26)', null],
  ['--dsw-alias-border-l1', 'rgba(220, 120, 170, 0.22)', 'rgba(120, 200, 220, 0.22)'],
  ['--dsw-alias-border-l2', 'rgba(220, 120, 170, 0.40)', 'rgba(120, 200, 220, 0.40)'],
  ['--dsw-alias-brand-primary', '#F56FBB', '#6FE3F5'],
  ['--dsw-alias-label-primary', '#F8EAF2', '#EAF6F8'],
  ['--dsw-alias-label-secondary', '#C29AA8', '#9AB4C2'],
  ['--dsw-alias-state-error-primary', '#FF5C86', '#FF5C86'],
  ['--dsw-alias-state-idle-primary', '#865F6A', '#5F7686'],
  ['--dsw-alias-state-success-primary', '#E06FD8', '#6FE0C6'],
  ['--dsw-alias-state-warn-primary', '#E0A860', '#E0A860'],
  ['--dsw-alias-bg-layer-3', '#F3D5E0', null],
  ['--dsw-alias-bg-layer-4', '#F7DFE8', null],
  ['--dsw-alias-border-l3', 'rgba(88, 20, 37, 0.18)', null],
  ['--dsw-alias-border-l4', 'rgba(88, 20, 37, 0.13)', null],
  ['--dsw-alias-interactive-bg-hover', 'rgba(179, 34, 87, 0.10)', null],
  ['--dsw-alias-interactive-bg-hover-solid', '#DDB2C2', null],
  ['--dsw-alias-state-business-primary', '#871532', null],
  ['--dsw-alias-separator-primary', 'rgba(88, 20, 37, 0.16)', null],
  ['--dsw-alias-settings-card-fill', '#F6DCE5', null],
  ['--dsw-specific-menu', '#F6DCE5', null],
  ['--dsw-alias-markdown-code-block', '#EDC6D4', null],
  ['--dsw-alias-markdown-code-block-banner', '#E6B9C9', null],
  ['--dsw-alias-markdown-inline-code', 'rgba(179, 34, 87, 0.08)', null],
  ['--dsw-alias-label-tertiary', '#A5788A', null],
  ['--dsw-alias-label-quaternary', '#8F6577', null],
  ['--dsw-alias-label-caption', '#8F6577', null],
  ['--dsw-alias-label-dimmed', 'rgba(248, 234, 242, 0.55)', null],
  ['--dsw-alias-label-primary-dimmed', 'rgba(248, 234, 242, 0.62)', null],
  ['--dsw-alias-label-primary-foreground', '#200A0E', null],
  ['--dsw-alias-label-primary-inverted', '#200A0E', null],
  ['--dsw-alias-label-primary-bluish', '#F8EAF2', null],
  ['--dsw-alias-label-error', '#FF5C86', null],
  ['--dsw-alias-link', '#FF7FB4', null],
  ['--dsw-alias-fill-l1', 'rgba(255, 190, 214, 0.05)', null],
  ['--dsw-alias-fill-l2', 'rgba(255, 190, 214, 0.09)', null],
  ['--dsw-alias-bg-skeleton', 'rgba(255, 190, 214, 0.08)', null],
  ['--dsw-alias-bg-l1', '#22090F', null],
  ['--dsw-alias-bg-module-platform', '#2A0E15', null],
  ['--dsw-alias-bg-document-preview', '#2A0E15', null],
  ['--dsw-alias-bg-mask-drop', 'rgba(0, 0, 0, 0.28)', null],
  ['--dsw-alias-border-inverted', 'rgba(255, 255, 255, 0.18)', null],
  ['--dsw-specific-bubble', '#33121A', null],
  ['--dsw-specific-input-major', '#2A0E15', null],
  ['--dsw-specific-selector', '#33121A', null],
  ['--dsw-specific-sidebar-nav-item-hover', 'rgba(245, 111, 187, 0.10)', null],
  ['--dsw-specific-sidebar-nav-item-active', 'rgba(245, 111, 187, 0.16)', null],
  ['--dsw-alias-button-elevated-fill', '#2E1017', null],
  ['--dsw-alias-button-floating-fill', 'rgba(42, 14, 21, 0.90)', null],
  ['--dsw-alias-button-floating-hover', '#3A1420', null],
  ['--dsw-alias-button-primary-fill', '#F56FBB', null],
  ['--dsw-alias-button-primary-hover', '#FF8FC8', null],
  ['--dsw-alias-button-contrast-fill', '#F8EAF2', null],
  ['--dsw-alias-button-info-fill', 'rgba(245, 111, 187, 0.12)', null],
  ['--dsw-alias-button-info-hover', 'rgba(245, 111, 187, 0.18)', null],
  ['--dsw-alias-button-tool-bar-fill', 'transparent', null],
  ['--dsw-alias-button-tool-bar-hover', 'rgba(245, 111, 187, 0.12)', null],
  ['--dsw-alias-menu-icon', '#C29AA8', null],
  ['--dsw-alias-menu-group-header-fill', '#33121A', null],
  ['--dsw-alias-scrollbar-bg-l1', 'rgba(255, 160, 190, 0.12)', null],
  ['--dsw-alias-scrollbar-bg-l2', 'rgba(255, 160, 190, 0.18)', null],
  ['--dsw-alias-scrollbar-hover-l2', 'rgba(255, 160, 190, 0.28)', null],
  ['--dsw-alias-state-business-tertiary', 'rgba(245, 111, 187, 0.18)', null],
  ['--dsw-alias-state-success-secondary', 'rgba(111, 224, 180, 0.18)', null],
  ['--dsw-alias-state-warn-label', '#E0A860', null],
  ['--dsw-alias-state-warn-tertiary', 'rgba(224, 168, 96, 0.18)', null],
  ['--dsw-alias-code-diff-added', 'rgba(111, 224, 180, 0.12)', null],
  ['--dsw-alias-code-diff-deleted', 'rgba(255, 92, 134, 0.12)', null],
  ['--dsw-alias-markdown-tag', 'rgba(245, 111, 187, 0.16)', null],
  ['--dsw-alias-toast-bg', '#F8EAF2', null],
  ['--dsw-alias-toast-label', '#200A0E', null],
  ['--dsw-alias-tooltip-bg', '#F8EAF2', null],
  ['--dsw-alias-tooltip-key-bg', 'rgba(32, 10, 14, 0.16)', null],
  ['--dsw-alias-switch-thumb', '#F8EAF2', null],
  ['--dsw-alias-settings-card-stroke', 'rgba(255, 160, 190, 0.14)', null],
  ['--dsw-specific-sidebar-fill', '#21080E', '#081521'],
];

// Keep this palette in step with the same table in client.js.
// Column 1 is the light skin, column 2 the dark one; a null drops the token
// from that skin instead of emitting an empty declaration.
const block = (column) => TOKENS
  .filter((row) => typeof row[column] === 'string')
  .map((row) => `  ${row[0]}: ${row[column]} !important;`)
  .join('\n');

const LIGHT_SCOPE = 'body:not([data-ds-dark-theme])';
const DARK_SCOPE = 'body[data-ds-dark-theme]';

const CSS = `/* In Falsus theme — palette layer. Two skins: wine red for light (a dark
   surface palette), slate with cyan for dark. The scheme is published on
   <body> by the ui-theme bootstrap. */
${LIGHT_SCOPE} {
${block(1)}
  background-color: var(--dsw-alias-bg-base) !important;
  background-image:
    linear-gradient(180deg, rgba(46, 20, 30, 0.55), rgba(32, 10, 14, 0.75) 46%, rgba(20, 6, 9, 0.95)),
    radial-gradient(1100px 720px at 92% -12%, rgba(245, 111, 187, 0.10), transparent 62%),
    radial-gradient(900px 640px at 4% 108%, rgba(255, 77, 125, 0.10), transparent 60%) !important;
  background-attachment: fixed !important;
}
${DARK_SCOPE} {
${block(2)}
  background-color: var(--dsw-alias-bg-base) !important;
  background-image:
    linear-gradient(225deg, rgba(226, 200, 206, 0.26), rgba(226, 200, 206, 0.08) 42%, transparent 72%),
    radial-gradient(1100px 720px at 92% -12%, rgba(228, 95, 168, 0.10), transparent 62%),
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
${LIGHT_SCOPE} ::selection {
  background-color: rgba(194, 42, 98, 0.20);
}
${DARK_SCOPE} ::selection {
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
          const dot = name.lastIndexOf('.');
          const extension = dot >= 0 ? name.slice(dot).toLowerCase() : '';
          const CONTENT_TYPES = {
            '.mp4': 'video/mp4',
            '.webp': 'image/webp',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.svg': 'image/svg+xml',
          };
          res.writeHead(200, {
            'content-type': CONTENT_TYPES[extension] || 'application/octet-stream',
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
