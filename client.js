window.__ModuleLoader__.load({
  id: '@local/in-falsus',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    // In Falsus palette: deep slate base, cool cyan for interaction,
    // restrained magenta for emphasis, hairline borders.
    const TOKENS = {
      '--dsw-alias-bg-base': { light: '#E8EFF3', dark: '#0A1520' },
      '--dsw-alias-bg-layer-1': { light: '#FFFFFF', dark: '#0E1B28' },
      '--dsw-alias-bg-layer-2': { light: '#F3F7F9', dark: '#142434' },
      '--dsw-alias-bg-overlay': { light: 'rgba(255, 255, 255, 0.96)', dark: 'rgba(10, 21, 32, 0.95)' },
      '--dsw-alias-border-l1': { light: 'rgba(20, 64, 78, 0.16)', dark: 'rgba(120, 200, 220, 0.22)' },
      '--dsw-alias-border-l2': { light: 'rgba(20, 64, 78, 0.26)', dark: 'rgba(120, 200, 220, 0.40)' },
      '--dsw-alias-brand-primary': { light: '#17616F', dark: '#6FE3F5' },
      '--dsw-alias-label-primary': { light: '#10202A', dark: '#EAF6F8' },
      '--dsw-alias-label-secondary': { light: '#526B78', dark: '#9AB4C2' },
      '--dsw-alias-state-error-primary': { light: '#C42A4A', dark: '#FF5C86' },
      '--dsw-alias-state-idle-primary': { light: '#8A9AA4', dark: '#5F7686' },
      '--dsw-alias-state-success-primary': { light: '#1F8A76', dark: '#6FE0C6' },
      '--dsw-alias-state-warn-primary': { light: '#9A6A25', dark: '#E0A860' },
      '--dsw-specific-sidebar-fill': { light: '#E0EAEF', dark: '#081521' },
    };

    const lightBlock = Object.entries(TOKENS)
      .map(([name, value]) => `  ${name}: ${value.light} !important;`)
      .join('\n');
    const darkBlock = Object.entries(TOKENS)
      .map(([name, value]) => `  ${name}: ${value.dark} !important;`)
      .join('\n');

    // Random square particles for the panel pages: one 460px tile of rects with
    // random position, size, rotation and alpha.
    const PARTICLES = 'url("data:image/svg+xml,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%27460%27 height=%27460%27><rect x=%27379%27 y=%27323%27 width=%271.9%27 height=%271.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.37%27 transform=%27rotate(47 379 323)%27/><rect x=%2710%27 y=%27116%27 width=%272.4%27 height=%272.4%27 fill=%27%23C9E7F2%27 fill-opacity=%270.52%27 transform=%27rotate(83 10 116)%27/><rect x=%27300%27 y=%27417%27 width=%273.8%27 height=%273.8%27 fill=%27%23C9E7F2%27 fill-opacity=%270.56%27 transform=%27rotate(88 300 417)%27/><rect x=%27234%27 y=%27192%27 width=%273.7%27 height=%273.7%27 fill=%27%23C9E7F2%27 fill-opacity=%270.57%27 transform=%27rotate(57 234 192)%27/><rect x=%27349%27 y=%2782%27 width=%273.6%27 height=%273.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.46%27 transform=%27rotate(60 349 82)%27/><rect x=%27427%27 y=%27430%27 width=%273.5%27 height=%273.5%27 fill=%27%23C9E7F2%27 fill-opacity=%270.49%27 transform=%27rotate(14 427 430)%27/><rect x=%27352%27 y=%27149%27 width=%272.0%27 height=%272.0%27 fill=%27%23C9E7F2%27 fill-opacity=%270.29%27 transform=%27rotate(87 352 149)%27/><rect x=%27257%27 y=%27254%27 width=%273.5%27 height=%273.5%27 fill=%27%23C9E7F2%27 fill-opacity=%270.32%27 transform=%27rotate(63 257 254)%27/><rect x=%27231%27 y=%27160%27 width=%271.9%27 height=%271.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.47%27 transform=%27rotate(53 231 160)%27/><rect x=%2778%27 y=%27309%27 width=%272.0%27 height=%272.0%27 fill=%27%23C9E7F2%27 fill-opacity=%270.56%27 transform=%27rotate(4 78 309)%27/><rect x=%27459%27 y=%27272%27 width=%272.2%27 height=%272.2%27 fill=%27%23C9E7F2%27 fill-opacity=%270.38%27 transform=%27rotate(63 459 272)%27/><rect x=%27416%27 y=%27261%27 width=%272.3%27 height=%272.3%27 fill=%27%23C9E7F2%27 fill-opacity=%270.34%27 transform=%27rotate(48 416 261)%27/><rect x=%27126%27 y=%27423%27 width=%273.1%27 height=%273.1%27 fill=%27%23C9E7F2%27 fill-opacity=%270.49%27 transform=%27rotate(66 126 423)%27/><rect x=%276%27 y=%27269%27 width=%273.3%27 height=%273.3%27 fill=%27%23C9E7F2%27 fill-opacity=%270.25%27 transform=%27rotate(68 6 269)%27/><rect x=%27158%27 y=%27391%27 width=%273.1%27 height=%273.1%27 fill=%27%23C9E7F2%27 fill-opacity=%270.43%27 transform=%27rotate(55 158 391)%27/><rect x=%2753%27 y=%27259%27 width=%271.7%27 height=%271.7%27 fill=%27%23C9E7F2%27 fill-opacity=%270.22%27 transform=%27rotate(55 53 259)%27/><rect x=%27458%27 y=%27368%27 width=%274.0%27 height=%274.0%27 fill=%27%23C9E7F2%27 fill-opacity=%270.52%27 transform=%27rotate(0 458 368)%27/><rect x=%27397%27 y=%27132%27 width=%273.0%27 height=%273.0%27 fill=%27%23C9E7F2%27 fill-opacity=%270.19%27 transform=%27rotate(47 397 132)%27/><rect x=%2740%27 y=%27429%27 width=%273.2%27 height=%273.2%27 fill=%27%23C9E7F2%27 fill-opacity=%270.54%27 transform=%27rotate(47 40 429)%27/><rect x=%27321%27 y=%27211%27 width=%272.0%27 height=%272.0%27 fill=%27%23C9E7F2%27 fill-opacity=%270.25%27 transform=%27rotate(57 321 211)%27/><rect x=%2752%27 y=%27149%27 width=%273.9%27 height=%273.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.43%27 transform=%27rotate(28 52 149)%27/><rect x=%2746%27 y=%27353%27 width=%272.9%27 height=%272.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.21%27 transform=%27rotate(67 46 353)%27/><rect x=%27313%27 y=%27276%27 width=%272.4%27 height=%272.4%27 fill=%27%23C9E7F2%27 fill-opacity=%270.4%27 transform=%27rotate(12 313 276)%27/><rect x=%27285%27 y=%27316%27 width=%272.9%27 height=%272.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.49%27 transform=%27rotate(13 285 316)%27/><rect x=%27375%27 y=%27103%27 width=%273.0%27 height=%273.0%27 fill=%27%23C9E7F2%27 fill-opacity=%270.45%27 transform=%27rotate(77 375 103)%27/><rect x=%27120%27 y=%27155%27 width=%273.1%27 height=%273.1%27 fill=%27%23C9E7F2%27 fill-opacity=%270.47%27 transform=%27rotate(26 120 155)%27/><rect x=%27370%27 y=%27369%27 width=%272.6%27 height=%272.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.17%27 transform=%27rotate(66 370 369)%27/><rect x=%2744%27 y=%27358%27 width=%271.8%27 height=%271.8%27 fill=%27%23C9E7F2%27 fill-opacity=%270.29%27 transform=%27rotate(78 44 358)%27/><rect x=%27249%27 y=%2788%27 width=%271.7%27 height=%271.7%27 fill=%27%23C9E7F2%27 fill-opacity=%270.45%27 transform=%27rotate(37 249 88)%27/><rect x=%2784%27 y=%275%27 width=%271.8%27 height=%271.8%27 fill=%27%23C9E7F2%27 fill-opacity=%270.19%27 transform=%27rotate(0 84 5)%27/><rect x=%27280%27 y=%27229%27 width=%272.6%27 height=%272.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.5%27 transform=%27rotate(33 280 229)%27/><rect x=%2774%27 y=%27362%27 width=%271.6%27 height=%271.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.53%27 transform=%27rotate(50 74 362)%27/><rect x=%2788%27 y=%27423%27 width=%273.6%27 height=%273.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.19%27 transform=%27rotate(53 88 423)%27/><rect x=%27460%27 y=%2713%27 width=%272.2%27 height=%272.2%27 fill=%27%23C9E7F2%27 fill-opacity=%270.24%27 transform=%27rotate(45 460 13)%27/><rect x=%27134%27 y=%27353%27 width=%273.6%27 height=%273.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.47%27 transform=%27rotate(44 134 353)%27/><rect x=%27291%27 y=%27118%27 width=%271.4%27 height=%271.4%27 fill=%27%23C9E7F2%27 fill-opacity=%270.29%27 transform=%27rotate(40 291 118)%27/><rect x=%27164%27 y=%27410%27 width=%271.5%27 height=%271.5%27 fill=%27%23C9E7F2%27 fill-opacity=%270.2%27 transform=%27rotate(25 164 410)%27/><rect x=%27173%27 y=%27131%27 width=%272.6%27 height=%272.6%27 fill=%27%23C9E7F2%27 fill-opacity=%270.43%27 transform=%27rotate(76 173 131)%27/><rect x=%27450%27 y=%2737%27 width=%273.8%27 height=%273.8%27 fill=%27%23C9E7F2%27 fill-opacity=%270.31%27 transform=%27rotate(21 450 37)%27/><rect x=%27225%27 y=%27211%27 width=%273.1%27 height=%273.1%27 fill=%27%23C9E7F2%27 fill-opacity=%270.43%27 transform=%27rotate(66 225 211)%27/><rect x=%27173%27 y=%27122%27 width=%272.4%27 height=%272.4%27 fill=%27%23C9E7F2%27 fill-opacity=%270.4%27 transform=%27rotate(70 173 122)%27/><rect x=%27103%27 y=%27282%27 width=%271.8%27 height=%271.8%27 fill=%27%23C9E7F2%27 fill-opacity=%270.26%27 transform=%27rotate(88 103 282)%27/><rect x=%2730%27 y=%27254%27 width=%273.9%27 height=%273.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.22%27 transform=%27rotate(0 30 254)%27/><rect x=%27394%27 y=%2714%27 width=%271.9%27 height=%271.9%27 fill=%27%23C9E7F2%27 fill-opacity=%270.43%27 transform=%27rotate(40 394 14)%27/></svg>")';

    const CSS = [
      '/* In Falsus theme: palette + structural accents. */',
      ':root {',
      '  /* Step-summary band. Swap these two stops to recolour every summary row. */',
      '  --if-hint-from: rgba(200, 224, 238, 0.15);',
      '  --if-hint-to: rgba(200, 224, 238, 0.02);',
      '  --if-hint-hover: linear-gradient(96deg, rgba(200, 224, 238, 0.26), rgba(200, 224, 238, 0.03) 72%, transparent);',
      '  --if-hint-ink: #EAF6F8;',
      `  --if-particles: ${PARTICLES};`,
      '}',
      `html:not([data-ds-dark-theme]) body:not([data-ds-dark-theme]) {\n${lightBlock}\n}`,
      `html[data-ds-dark-theme],\nbody[data-ds-dark-theme] {\n${darkBlock}\n}`,
      'html body {',
      '  background-color: var(--dsw-alias-bg-base) !important;',
      '  background-image:',
      '    linear-gradient(225deg, rgba(200, 214, 226, 0.26), rgba(200, 214, 226, 0.08) 42%, transparent 72%),',
      '    radial-gradient(1100px 720px at 92% -12%, rgba(95, 208, 228, 0.10), transparent 62%),',
      '    radial-gradient(900px 640px at 4% 108%, rgba(255, 77, 125, 0.06), transparent 60%) !important;',
      '  background-attachment: fixed !important;',
      '}',
      '/* Brand row: prism mark with a lit rim, wordmark kept beside it. */',
      '[data-slot="sidebar.brand.name"] { display: inline-flex !important; align-items: center; opacity: 0.92; }',
      '[data-slot="sidebar.brand.mark"] svg {',
      '  width: 30px !important;',
      '  height: 30px !important;',
      '  filter: drop-shadow(0 0 4px rgba(111, 227, 245, 0.55)) drop-shadow(0 0 11px rgba(255, 77, 125, 0.24));',
      '}',
      '/* Hero mark: the same prism, lit a little wider, without the preview tag. */',
      '[data-slot="conversation.hero.brand.mark"] svg {',
      '  filter: drop-shadow(0 0 7px rgba(111, 227, 245, 0.5)) drop-shadow(0 0 18px rgba(255, 77, 125, 0.22));',
      '  overflow: visible;',
      '}',
      '.WOwLGG_previewBadge { display: none !important; }',
      '/* Hero headline: the game title-card serif instead of the UI sans. */',
      '[data-if-hero] {',
      '  font-family: "Cormorant Garamond", "EB Garamond", "Palatino Linotype", "Book Antiqua", Georgia, "Times New Roman", serif !important;',
      '  font-size: 25px !important;',
      '  font-weight: 400 !important;',
      '  font-style: normal;',
      '  letter-spacing: 0.015em;',
      '  line-height: 34px !important;',
      '}',
      '/* Sidebar column: paint the container around the brand row. */',
      ':is(div, aside):has(> .wtg9ga_logoRow) {',
      '  background-color: var(--dsw-specific-sidebar-fill) !important;',
      '  border-right: 1px solid rgba(120, 200, 220, 0.16) !important;',
      '}',
      '/* Sidebar: the New Session card becomes a plate with a deep-cyan tick,',
      '   the same shell + surface + raised edge as the account row. */',
      '.wtg9ga_newSession {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  border: 0 !important;',
      '  border-radius: 5px !important;',
      '  background: transparent !important;',
      '  overflow: visible !important;',
      '}',
      '.wtg9ga_newSession::before {',
      "  content: '';",
      '  position: absolute; inset: 0; z-index: -1; border-radius: 5px; pointer-events: none;',
      '  background: linear-gradient(180deg, rgba(126, 208, 224, 0.62), rgba(34, 96, 112, 0.5));',
      '  transition: background 0.15s ease;',
      '}',
      '.wtg9ga_newSession::after {',
      "  content: '';",
      '  position: absolute; inset: 1px; z-index: -1; border-radius: 4px; pointer-events: none;',
      '  background-image:',
      '    linear-gradient(90deg, #A8F0FA 0 1px, rgba(86, 202, 220, 1) 1px 2px, rgba(18, 84, 98, 0.95) 2px 3px, rgba(3, 18, 26, 0.55) 3px 4px, transparent 4px),',
      '    linear-gradient(180deg, rgba(226, 244, 252, 0.10), rgba(200, 220, 236, 0.02) 46%, rgba(0, 0, 0, 0.16)),',
      '    linear-gradient(180deg, rgba(20, 50, 62, 0.94), rgba(7, 20, 27, 0.94));',
      '  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.4);',
      '  transition: background-image 0.15s ease;',
      '}',
      '.wtg9ga_newSession:hover::before,',
      '.wtg9ga_newSession:focus-visible::before,',
      '.wtg9ga_newSession:active::before {',
      '  background: linear-gradient(180deg, rgba(166, 236, 248, 0.85), rgba(56, 134, 152, 0.6));',
      '}',
      '.wtg9ga_newSession:hover::after,',
      '.wtg9ga_newSession:focus-visible::after,',
      '.wtg9ga_newSession:active::after {',
      '  background-image:',
      '    linear-gradient(90deg, #FFFFFF 0 1px, rgba(148, 240, 255, 1) 1px 2px, rgba(30, 118, 136, 0.95) 2px 3px, rgba(3, 22, 30, 0.6) 3px 4px, transparent 4px),',
      '    linear-gradient(180deg, rgba(226, 244, 252, 0.16), rgba(200, 220, 236, 0.03) 46%, rgba(0, 0, 0, 0.08)),',
      '    linear-gradient(180deg, rgba(28, 66, 82, 0.95), rgba(9, 26, 35, 0.95));',
      '}',
      '.wtg9ga_newSession > * { position: relative; z-index: 1; }',
      '/* Conversation header: hairline instead of a floating bar. */',
      '.an3WzG_header { border-bottom: 1px solid rgba(120, 200, 220, 0.14) !important; }',
      '.an3WzG_titleCluster { letter-spacing: 0.02em; }',
      '/* Sidebar tree: In Falsus rows with a cyan tick for the active session. */',
      '.GAkraW_sectionLabel { letter-spacing: 0.08em !important; }',
      '.wnFoaW_projectRow { border-radius: 2px !important; }',
      '.wnFoaW_projectRow:hover { background: rgba(111, 227, 245, 0.05) !important; }',
      '.wnFoaW_sessionRow {',
      '  border-radius: 0 !important;',
      '  border-left: 2px solid transparent !important;',
      '}',
      '.wnFoaW_sessionRow:hover {',
      '  background: rgba(111, 227, 245, 0.06) !important;',
      '  border-left-color: rgba(111, 227, 245, 0.35) !important;',
      '}',
      '.wnFoaW_sessionRow.wnFoaW_selected {',
      '  background: linear-gradient(90deg, rgba(111, 227, 245, 0.14), rgba(111, 227, 245, 0.02)) !important;',
      '  border-left-color: #6FE3F5 !important;',
      '}',
      '.wnFoaW_time { font-variant-numeric: tabular-nums; }',
      '/* Panel icons: bordered plates with a cyan edge, distinct from session rows. */',
      '.wtg9ga_panelRow {',
      '  position: relative !important;',
      '  border: 0 !important;',
      '  background: transparent !important;',
      '  padding-right: 14px !important;',
      '}',
      '/* The plate itself, shortened so the particle field has room on the right. */',
      '.wtg9ga_panelRow::before {',
      "  content: '';",
      '  position: absolute; left: 0; top: 0; bottom: 0; right: 10px;',
      '  border: 1px solid transparent; border-radius: 2px;',
      '  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%);',
      "  transition: background-color 0.15s ease, border-color 0.15s ease;",
      '  pointer-events: none;',
      '}',
      '/* Diamond dot field just outside the plate, bright at the edge and fading right. */',
      '.wtg9ga_panelRow::after {',
      "  content: '';",
      '  position: absolute; top: 0; bottom: 0; right: -6px; width: 30px;',
      '  clip-path: polygon(14px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 2px 100%, 14px calc(100% - 12px));',
      '  pointer-events: none; opacity: 0;',
      '  background-color: transparent !important;',
      '  background-image:',
      '    radial-gradient(circle, rgba(212, 234, 245, 0.85) 0.7px, transparent 1.1px),',
      '    radial-gradient(circle, rgba(212, 234, 245, 0.55) 0.6px, transparent 1px);',
      '  background-size: 4px 4px, 4px 4px;',
      '  background-position: 0 0, 2px 2px;',
      '  -webkit-mask-image: linear-gradient(90deg, #000 0, transparent 100%);',
      '  mask-image: linear-gradient(90deg, #000 0, transparent 100%);',
      '  transition: opacity 0.2s ease;',
      '}',
      '.wtg9ga_panelRow:hover::before,',
      '.wtg9ga_panelRow[aria-current]::before,',
      '.wtg9ga_panelRow[aria-selected="true"]::before,',
      '.wtg9ga_panelRow[data-active="true"]::before {',
      '  background: linear-gradient(180deg, rgba(216, 231, 241, 0.11), rgba(200, 214, 226, 0.04));',
      '  border-color: rgba(202, 216, 228, 0.30);',
      '  border-left: 2px solid rgba(216, 232, 242, 0.65);',
      '  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12), inset 0 -1px 0 rgba(0, 0, 0, 0.35);',
      '}',
      '.wtg9ga_panelRow:hover::after,',
      '.wtg9ga_panelRow[aria-current]::after,',
      '.wtg9ga_panelRow[aria-selected="true"]::after,',
      '.wtg9ga_panelRow[data-active="true"]::after { opacity: 1; }',
      '.wtg9ga_panelTitle { letter-spacing: 0.05em !important; }',
      '.wtg9ga_panelGlyph { opacity: 0.78; }',
      '.wtg9ga_panelRow:hover .wtg9ga_panelGlyph,',
      '.wtg9ga_panelRow[aria-current] .wtg9ga_panelGlyph,',
      '.wtg9ga_panelRow[aria-selected="true"] .wtg9ga_panelGlyph,',
      '.wtg9ga_panelRow[data-active="true"] .wtg9ga_panelGlyph { opacity: 1; }',
      '/* Account row at the sidebar foot: the plate sits on the trigger row, the',
      '   same box the shell highlights on hover, so the two line up exactly.',
      '   The tick lives on the shell so it can sit left of the surface. */',
      '.wtg9ga_settingsArea { position: relative !important; }',
      '.AnXs9G_triggerRow {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  background-color: transparent !important;',
      '  box-shadow: none !important;',
      '  box-sizing: border-box !important;',
      '  padding-left: 14px !important;',
      '}',
      '.AnXs9G_triggerRow > * { background-color: transparent !important; }',
      '.AnXs9G_triggerRow::before {',
      "  content: '';",
      '  position: absolute; left: 2px; top: 0; bottom: 0; right: 4px; z-index: -1;',
      '  border-radius: 5px;',
      '  background-image:',
      '    linear-gradient(90deg, #FFFFFF 0 1px, rgba(232, 246, 252, 1) 1px 2px, rgba(168, 194, 210, 0.95) 2px 3px, rgba(30, 46, 60, 0.55) 3px 4px, transparent 4px),',
      '    linear-gradient(180deg, rgba(226, 240, 249, 0.5), rgba(150, 174, 191, 0.32));',
      '  pointer-events: none;',
      '}',
      '/* Surface starts 4px in, so the shell strip on the far left reads as a tick. */',
      '.AnXs9G_triggerRow::after {',
      "  content: '';",
      '  position: absolute; left: 6px; top: 1px; bottom: 1px; right: 5px; z-index: -1;',
      '  border-radius: 4px;',
      '  background-image:',
      '    linear-gradient(180deg, rgba(226, 244, 252, 0.07), rgba(200, 220, 236, 0.01) 42%, rgba(0, 0, 0, 0.18)),',
      '    linear-gradient(180deg, rgba(28, 48, 65, 0.92), rgba(12, 23, 33, 0.92));',
      '  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.4);',
      '  pointer-events: none;',
      '  transition: background-image 0.15s ease;',
      '}',
      '/* The shell draws the focus cue, so the native ring must not stick out. */',
      '.AnXs9G_triggerRow, .AnXs9G_triggerRow *,',
      '.wtg9ga_settingsArea, .wtg9ga_settingsArea * { outline: none !important; }',
      '.AnXs9G_triggerRow:hover::before {',
      '  background-image:',
      '    linear-gradient(90deg, #FFFFFF 0 1px, rgba(244, 254, 255, 1) 1px 2px, rgba(186, 210, 226, 0.95) 2px 3px, rgba(24, 40, 54, 0.6) 3px 4px, transparent 4px),',
      '    linear-gradient(180deg, rgba(240, 250, 255, 0.72), rgba(176, 200, 216, 0.46));',
      '  box-shadow: 0 0 0 1px rgba(214, 238, 250, 0.18), 0 0 8px rgba(150, 210, 235, 0.26);',
      '}',
      '.AnXs9G_triggerRow:focus-visible::before,',
      '.AnXs9G_triggerRow:focus-within::before {',
      '  background-image:',
      '    linear-gradient(90deg, #FFFFFF 0 1px, rgba(250, 255, 255, 1) 1px 2px, rgba(198, 222, 236, 0.98) 2px 3px, rgba(18, 32, 44, 0.62) 3px 4px, transparent 4px),',
      '    linear-gradient(180deg, rgba(245, 252, 255, 0.85), rgba(186, 210, 226, 0.58));',
      '  box-shadow: 0 0 0 1px rgba(214, 238, 250, 0.30), 0 0 10px rgba(150, 210, 235, 0.42), 0 0 22px rgba(120, 180, 210, 0.22);',
      '}',
      '.AnXs9G_triggerRow:hover::after {',
      '  background-image:',
      '    linear-gradient(180deg, rgba(226, 244, 252, 0.12), rgba(200, 220, 236, 0.02) 42%, rgba(0, 0, 0, 0.1)),',
      '    linear-gradient(180deg, rgba(38, 62, 82, 0.94), rgba(15, 28, 40, 0.94));',
      '}',
      '.AnXs9G_triggerRow:focus-visible::after,',
      '.AnXs9G_triggerRow:focus-within::after {',
      '  background-image:',
      '    linear-gradient(180deg, rgba(226, 244, 252, 0.14), rgba(200, 220, 236, 0.03) 42%, rgba(0, 0, 0, 0.1)),',
      '    linear-gradient(180deg, rgba(40, 66, 86, 0.94), rgba(16, 30, 42, 0.94));',
      '}',
      '/* Composer: wide, low, four-corner chamfered dialogue frame. */',
      '.GRgSLq_card {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  border-radius: 0 !important;',
      '  border: 0 !important;',
      '  padding: 14px 18px 6px 26px !important;',
      '  min-height: 112px !important;',
      '  background: transparent !important;',
      '  clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px);',
      '}',
      '/* Silver shell: hollow at the sides, thicker across the chamfers. */',
      '.GRgSLq_card::before {',
      "  content: '';",
      '  position: absolute; inset: 0; z-index: -1; pointer-events: none;',
      '  background: linear-gradient(180deg, rgba(232, 244, 251, 0.95), rgba(148, 174, 192, 0.82));',
      '  clip-path: polygon(20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px), 0 20px);',
      '  -webkit-mask-image: linear-gradient(180deg, #000 0 26px, transparent 26px calc(100% - 26px), #000 calc(100% - 26px));',
      '  mask-image: linear-gradient(180deg, #000 0 26px, transparent 26px calc(100% - 26px), #000 calc(100% - 26px));',
      '}',
      '/* Inset surface: 2px on the straights, wider silver across the chamfers. */',
      '.GRgSLq_card::after {',
      "  content: '';",
      '  position: absolute; inset: 2px; z-index: -1; pointer-events: none;',
      '  clip-path: polygon(23px 0, calc(100% - 23px) 0, 100% 23px, 100% calc(100% - 23px), calc(100% - 23px) 100%, 23px 100%, 0 calc(100% - 23px), 0 23px);',
      '  background-color: rgba(9, 18, 27, 0.98);',
      '  background-image:',
      '    linear-gradient(180deg, rgba(111, 227, 245, 0.45), rgba(111, 227, 245, 0.04)),',
      '    radial-gradient(90% 130% at 50% 118%, rgba(226, 246, 250, 0.10), transparent 58%),',
      '    radial-gradient(rgba(150, 215, 235, 0.09) 1px, transparent 1.2px),',
      '    linear-gradient(180deg, rgba(16, 30, 43, 0.97), rgba(8, 15, 23, 0.99));',
      '  background-size: 1px calc(100% - 44px), auto, 14px 14px, auto;',
      '  background-position: 12px 22px, 0 0, 0 0, 0 0;',
      '  background-repeat: no-repeat, no-repeat, repeat, no-repeat;',
      '}',
      '/* Soft silver glow around the dialogue frame. */',
      '.GRgSLq_root { filter: drop-shadow(0 0 14px rgba(130, 205, 230, 0.22)); }',
      '/* Composer seat: drop its own dark band so the page background runs behind it. */',
      '.an3WzG_composerSeat {',
      '  background: transparent !important;',
      '}',
      '/* Panel pages (plugins, jobs, settings, more): the same top-dark lift as the',
      '   conversation, then a cyan dot lattice, a faint square grid and the squares. */',
      '.mP3x-q_centerCol {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  background-color: var(--dsw-alias-bg-base) !important;',
      '  background-image: linear-gradient(180deg, rgba(198, 212, 226, 0), rgba(198, 212, 226, 0.06) 50%, rgba(198, 212, 226, 0.20)) !important;',
      '}',
      '.mP3x-q_centerCol > div:not([class*="an3WzG"]) { background: transparent !important; }',
      '/* Panel pages paint their own opaque sheet; let the lift and the texture through. */',
      '.mP3x-q_centerCol > div:not([class*="an3WzG"]) > * { background-color: transparent !important; }',
      '.mP3x-q_centerCol::before {',
      "  content: '';",
      '  position: absolute; inset: 0; z-index: -1; pointer-events: none;',
      '  background-image:',
      '    var(--if-particles),',
      '    radial-gradient(circle, rgba(150, 215, 235, 0.20) 0.8px, transparent 1.2px),',
      '    radial-gradient(circle, rgba(150, 215, 235, 0.13) 0.7px, transparent 1.1px),',
      '    repeating-linear-gradient(90deg, rgba(160, 220, 240, 0.06) 0 1px, transparent 1px 80px),',
      '    repeating-linear-gradient(0deg, rgba(160, 220, 240, 0.06) 0 1px, transparent 1px 80px);',
      '  background-size: 460px 460px, 24px 16px, 24px 16px, auto, auto;',
      '  background-position: 0 0, 0 0, 12px 8px, 0 0, 0 0;',
      '  -webkit-mask-image:',
      '    linear-gradient(180deg, transparent 0, #000 26%),',
      '    linear-gradient(90deg, transparent 0, #000 14%, #000 86%, transparent 100%),',
      '    linear-gradient(180deg, transparent 0, #000 12%, #000 88%, transparent 100%);',
      '  -webkit-mask-composite: source-in;',
      '  mask-image:',
      '    linear-gradient(180deg, transparent 0, #000 26%),',
      '    linear-gradient(90deg, transparent 0, #000 14%, #000 86%, transparent 100%),',
      '    linear-gradient(180deg, transparent 0, #000 12%, #000 88%, transparent 100%);',
      '  mask-composite: intersect;',
      '  opacity: 0.9;',
      '}',
      '/* The settings dialog is its own overlay, not a centre-column page. */',
      '[class*="AnXs9G_panel"] {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  background-color: var(--dsw-alias-bg-base) !important;',
      '  background-image: linear-gradient(180deg, rgba(198, 212, 226, 0), rgba(198, 212, 226, 0.06) 50%, rgba(198, 212, 226, 0.20)) !important;',
      '}',
      '[class*="AnXs9G_pageBody"], [class*="AnXs9G_section"] { background-color: transparent !important; }',
      '[class*="AnXs9G_panel"]::before {',
      "  content: '';",
      '  position: absolute; inset: 0; z-index: -1; pointer-events: none;',
      '  background-image:',
      '    var(--if-particles),',
      '    radial-gradient(circle, rgba(150, 215, 235, 0.20) 0.8px, transparent 1.2px),',
      '    radial-gradient(circle, rgba(150, 215, 235, 0.13) 0.7px, transparent 1.1px),',
      '    repeating-linear-gradient(90deg, rgba(160, 220, 240, 0.06) 0 1px, transparent 1px 80px),',
      '    repeating-linear-gradient(0deg, rgba(160, 220, 240, 0.06) 0 1px, transparent 1px 80px);',
      '  background-size: 460px 460px, 24px 16px, 24px 16px, auto, auto;',
      '  background-position: 0 0, 0 0, 12px 8px, 0 0, 0 0;',
      '  -webkit-mask-image:',
      '    linear-gradient(180deg, transparent 0, #000 26%),',
      '    linear-gradient(90deg, transparent 0, #000 14%, #000 86%, transparent 100%),',
      '    linear-gradient(180deg, transparent 0, #000 12%, #000 88%, transparent 100%);',
      '  -webkit-mask-composite: source-in;',
      '  mask-image:',
      '    linear-gradient(180deg, transparent 0, #000 26%),',
      '    linear-gradient(90deg, transparent 0, #000 14%, #000 86%, transparent 100%),',
      '    linear-gradient(180deg, transparent 0, #000 12%, #000 88%, transparent 100%);',
      '  mask-composite: intersect;',
      '  opacity: 0.9;',
      '  border-radius: inherit;',
      '}',
      '/* Conversation: user bubbles become chamfered plates, not grey pills. */',
      '.LOmM4q_bubble {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  border-radius: 0 !important;',
      '  background: linear-gradient(180deg, rgba(208, 228, 240, 0.62), rgba(126, 152, 172, 0.38)) !important;',
      '  padding: 12px 18px 12px 20px !important;',
      '  clip-path: polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px);',
      '}',
      '/* Inner surface: 1px of shell shows on the straights, a hair more on the chamfers. */',
      '/* Negative stacking keeps it under the text without touching the message spans. */',
      '.LOmM4q_bubble::before {',
      "  content: '';",
      '  position: absolute; inset: 1px; z-index: -1; pointer-events: none;',
      '  clip-path: polygon(11px 0, 100% 0, 100% calc(100% - 11px), calc(100% - 11px) 100%, 0 100%, 0 11px);',
      '  background-color: #0B1620;',
      '  background-image:',
      '    linear-gradient(180deg, rgba(111, 227, 245, 0.12), rgba(111, 227, 245, 0.01)),',
      '    radial-gradient(rgba(150, 215, 235, 0.07) 0.7px, transparent 1px),',
      '    linear-gradient(180deg, #101F2C, #091219);',
      '  background-size: auto, 12px 12px, auto;',
      '  background-repeat: no-repeat, repeat, no-repeat;',
      '}',
      '/* Cyan tick down the left edge: lit on the inner side, shaded on the outer. */',
      '.LOmM4q_bubble::after {',
      "  content: '';",
      '  position: absolute; left: 1px; top: 11px; bottom: 11px; width: 3px; z-index: -1; pointer-events: none;',
      '  background-image: linear-gradient(90deg, rgba(232, 252, 255, 0.95) 0, rgba(111, 227, 245, 0.92) 42%, rgba(46, 134, 158, 0.9) 100%);',
      '  -webkit-mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), #000 26%, #000 74%, rgba(0, 0, 0, 0.12));',
      '  mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.2), #000 26%, #000 74%, rgba(0, 0, 0, 0.12));',
      '  box-shadow: 0 0 7px rgba(111, 227, 245, 0.38);',
      '}',
      '/* Tool calls: a hairline frame that fades out, over a wash that fades out too. */',
      '.pDft-q_callRow { margin: 1px 0 !important; }',
      '.hKdVjq_row {',
      '  position: relative !important;',
      '  box-sizing: border-box !important;',
      '  width: 100%;',
      '  height: calc(30px + var(--dsh-content-font-delta, 0px)) !important;',
      '  padding: 0 12px !important;',
      '  border: 1px solid transparent !important;',
      '  border-image: linear-gradient(90deg, rgba(210, 236, 248, 0.6), rgba(206, 232, 244, 0.3) 38%, rgba(206, 232, 244, 0) 78%) 1 !important;',
      '  border-radius: 0 !important;',
      '  /* The top-left chamfer keeps its stroke, drawn just inside the clipped edge. */',
      '  background-color: transparent !important;',
      '  background-image: linear-gradient(135deg, transparent 40%, rgba(206, 232, 244, 0.55) 40% 60%, transparent 60%) !important;',
      '  background-size: 6px 6px !important;',
      '  background-position: 0 0 !important;',
      '  background-repeat: no-repeat !important;',
      '  clip-path: polygon(6px 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%, 0 6px);',
      '  transition: border-image 0.15s ease;',
      '}',
      '/* The wash lives inside the frame and thins out toward the right. */',
      '.hKdVjq_row::after {',
      "  content: '';",
      '  position: absolute; inset: 0; z-index: 0; pointer-events: none;',
      '  background-image:',
      '    linear-gradient(90deg, rgba(252, 254, 255, 0.95) 0 1px, rgba(200, 221, 234, 0.88) 1px 2px, rgba(112, 138, 157, 0.72) 2px 3px, transparent 3px),',
      '    linear-gradient(90deg, transparent 0 3px, rgba(206, 230, 242, 0.1) 3px 8px, transparent 8px),',
      '    linear-gradient(96deg, rgba(196, 224, 236, 0.14), rgba(196, 224, 236, 0.02) 54%, transparent 90%);',
      '  clip-path: polygon(5px 0, 100% 0, 100% calc(100% - 5px), calc(100% - 5px) 100%, 0 100%, 0 5px);',
      '}',
      '.hKdVjq_row > * { position: relative; z-index: 1; }',
      '.hKdVjq_row:hover,',
      '.hKdVjq_row[aria-expanded="true"] {',
      '  border-image: linear-gradient(90deg, rgba(226, 245, 255, 0.85), rgba(210, 236, 248, 0.45) 38%, rgba(206, 232, 244, 0) 78%) 1 !important;',
      '}',
      '.hKdVjq_row:hover::after,',
      '.hKdVjq_row[aria-expanded="true"]::after {',
      '  background-image:',
      '    linear-gradient(90deg, #FFFFFF 0 1px, rgba(226, 240, 249, 0.95) 1px 2px, rgba(150, 176, 194, 0.85) 2px 3px, transparent 3px),',
      '    linear-gradient(90deg, transparent 0 3px, rgba(214, 236, 247, 0.16) 3px 8px, transparent 8px),',
      '    linear-gradient(96deg, rgba(206, 232, 244, 0.24), rgba(196, 224, 236, 0.03) 54%, transparent 90%);',
      '}',
      '/* Step summary row: a borderless tinted band, mono italic, no frame line. */',
      '.BE0jCW_title {',
      '  position: relative !important;',
      '  width: 100%;',
      '  height: calc(26px + var(--dsh-content-font-delta, 0px)) !important;',
      '  padding: 0 14px !important;',
      '  border-radius: 0 !important;',
      '  background-image: linear-gradient(96deg, var(--if-hint-from), var(--if-hint-to) 72%, transparent) !important;',
      '  background-color: transparent !important;',
      '  clip-path: polygon(7px 0, 100% 0, 100% calc(100% - 7px), calc(100% - 7px) 100%, 0 100%, 0 7px);',
      '  transition: background-image 0.15s ease;',
      '}',
      '.BE0jCW_title .BE0jCW_label {',
      '  font-family: var(--ds-font-family-code, ui-monospace, monospace) !important;',
      '  font-style: italic;',
      '  font-weight: 600;',
      '  font-size: calc(var(--dsh-content-font-size, 14px) - 1px);',
      '  letter-spacing: 0.02em;',
      '  color: var(--if-hint-ink) !important;',
      '  padding-right: 4px;',
      '}',
      '.BE0jCW_title:hover {',
      '  background-image: var(--if-hint-hover) !important;',
      '}',
      '/* Completed-turn footer: a tick ruler instead of a solid hairline. */',
      '.hE4tRW_root {',
      '  position: relative !important;',
      '  border-bottom: 0 !important;',
      '}',
      '.hE4tRW_root::after {',
      "  content: '';",
      '  position: absolute; left: 0; right: 0; bottom: 0; height: 6px;',
      '  background-image: repeating-linear-gradient(90deg, rgba(210, 236, 248, 0.72) 0 1px, transparent 1px 8px);',
      '  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 34%, #000 66%, transparent 100%);',
      '  mask-image: linear-gradient(90deg, transparent 0, #000 34%, #000 66%, transparent 100%);',
      '  pointer-events: none;',
      '}',
      '::selection { background-color: rgba(95, 208, 228, 0.28); }',
      '/* Window HUD frame intentionally omitted: native window buttons cover the corners. */',
      '/* Background: dark at the top, a brighter silver lift toward the bottom. */',
      '.an3WzG_root {',
      '  position: relative !important;',
      '  isolation: isolate;',
      '  background-color: var(--dsw-alias-bg-base) !important;',
      '  background-image: linear-gradient(180deg, rgba(198, 212, 226, 0) 0%, rgba(198, 212, 226, 0.06) 50%, rgba(198, 212, 226, 0.20) 100%) !important;',
      '}',
      '.wtg9ga_root {',
      '  background-image: linear-gradient(180deg, rgba(198, 212, 226, 0), rgba(198, 212, 226, 0.09)) !important;',
      '}',
      '/* Glass lattice along the bottom of the conversation background:',
      '   strong at both sides, fading out through the middle. */',
      '.an3WzG_root::after {',
      "  content: '';",
      '  position: absolute; inset: 0; z-index: -1; pointer-events: none;',
      '  background-image:',
      '    repeating-linear-gradient(45deg, rgba(160, 225, 240, 0.10) 0 1px, transparent 1px 20px),',
      '    repeating-linear-gradient(-45deg, rgba(160, 225, 240, 0.10) 0 1px, transparent 1px 20px);',
      '  -webkit-mask-image:',
      '    linear-gradient(180deg, transparent 46%, #000 100%),',
      '    linear-gradient(90deg, #000 0 16%, transparent 40%, transparent 60%, #000 84% 100%);',
      '  -webkit-mask-composite: source-in;',
      '  mask-image:',
      '    linear-gradient(180deg, transparent 46%, #000 100%),',
      '    linear-gradient(90deg, #000 0 16%, transparent 40%, transparent 60%, #000 84% 100%);',
      '  mask-composite: intersect;',
      '}',
    ].join('\n');

    const MARKER = 'data-in-falsus-client';

    let markSeq = 0;

    // Prism mark: warm facet on the left, cool facet on the right, a lit crack
    // down the middle, a rim light on the top edge and a blurred halo behind.
    function BrandMark(props) {
      const size = typeof props.size === 'number' && props.size > 0 ? props.size : 24;
      const edge = Math.round(size * 1.18);
      const uid = `ifm${(markSeq = (markSeq + 1) % 997)}`;
      const ref = (name) => `url(#${uid}-${name})`;
      return h('svg', {
        width: edge,
        height: edge,
        viewBox: '0 0 32 32',
        'aria-hidden': true,
        focusable: false,
        style: { display: 'block', overflow: 'visible' },
      },
        h('defs', null,
          h('linearGradient', { id: `${uid}-warm`, x1: '0', y1: '0', x2: '0.6', y2: '1' },
            h('stop', { offset: '0%', stopColor: '#FFB3C6' }),
            h('stop', { offset: '38%', stopColor: '#F04E7B' }),
            h('stop', { offset: '100%', stopColor: '#6B1630' })),
          h('linearGradient', { id: `${uid}-cool`, x1: '0.2', y1: '0', x2: '1', y2: '1' },
            h('stop', { offset: '0%', stopColor: '#F4FEFF' }),
            h('stop', { offset: '40%', stopColor: '#8FE6F6' }),
            h('stop', { offset: '100%', stopColor: '#1A6B82' })),
          h('linearGradient', { id: `${uid}-edge`, x1: '0', y1: '0', x2: '0.4', y2: '1' },
            h('stop', { offset: '0%', stopColor: '#FFFFFF' }),
            h('stop', { offset: '100%', stopColor: '#BFEAF4' })),
          h('filter', { id: `${uid}-glow`, x: '-70%', y: '-70%', width: '240%', height: '240%' },
            h('feGaussianBlur', { stdDeviation: '1.5', result: 'blur' }))),
        h('path', {
          d: 'M16 2 L4 9 L4 23 L16 30 L28 23 L28 9 Z',
          fill: 'rgba(111, 227, 245, 0.55)',
          filter: ref('glow'),
        }),
        h('path', { d: 'M16 2 L4 9 L4 23 L16 30 Z', fill: ref('warm') }),
        h('path', { d: 'M16 2 L28 9 L28 23 L16 30 Z', fill: ref('cool') }),
        h('path', { d: 'M4 9 L4 23 L16 30 Z', fill: '#0A1520', fillOpacity: '0.3' }),
        h('path', { d: 'M28 9 L28 23 L16 30 Z', fill: '#0A1520', fillOpacity: '0.22' }),
        h('path', { d: 'M16 3.6 L5.8 9.5 L13.1 12.6 Z', fill: '#FFFFFF', fillOpacity: '0.22' }),
        h('path', { d: 'M16 3.6 L26.2 9.5 L18.9 12.6 Z', fill: '#FFFFFF', fillOpacity: '0.15' }),
        h('path', {
          d: 'M16 2 L13.2 9.6 L18.4 14.4 L13.6 20.8 L16 30',
          fill: 'none',
          stroke: 'rgba(180, 245, 255, 0.8)',
          strokeWidth: 2.4,
          strokeLinejoin: 'round',
          filter: ref('glow'),
        }),
        h('path', {
          d: 'M16 2 L13.2 9.6 L18.4 14.4 L13.6 20.8 L16 30',
          fill: 'none',
          stroke: '#FFFFFF',
          strokeOpacity: 0.95,
          strokeWidth: 1.05,
          strokeLinejoin: 'round',
        }),
        h('path', {
          d: 'M16 2 L4 9 L4 23 L16 30 L28 23 L28 9 Z',
          fill: 'none',
          stroke: ref('edge'),
          strokeOpacity: 0.9,
          strokeWidth: 0.9,
        }),
        h('path', { d: 'M16 2 L4 9', fill: 'none', stroke: '#FFFFFF', strokeOpacity: 0.95, strokeWidth: 1.3, strokeLinecap: 'round' }),
        h('path', { d: 'M28 23 L16 30', fill: 'none', stroke: '#08131E', strokeOpacity: 0.85, strokeWidth: 1.2, strokeLinecap: 'round' }),
        h('path', {
          d: 'M21.8 5.2 L26.6 9.4 L22.4 11.6 Z',
          fill: ref('cool'),
          fillOpacity: 0.95,
          stroke: '#EAF8FC',
          strokeOpacity: 0.45,
          strokeWidth: 0.4,
        }),
        h('path', {
          d: 'M6.8 20.4 L10.6 24.4 L6.2 25.6 Z',
          fill: ref('warm'),
          fillOpacity: 0.95,
          stroke: '#FFD9E3',
          strokeOpacity: 0.4,
          strokeWidth: 0.4,
        }),
      );
    }

    function warn(step, error) {
      try {
        console.warn(`[in-falsus] ${step} failed`, error);
      } catch (ignored) {
        // console unavailable; nothing else to do
      }
    }

    const INTRO_FLAG = 'in-falsus-intro-played';

    const HERO_LINE = 'Exspēs, cold wings fold around us';
    const HERO_SOURCE = ['探索未至之境', 'Into the Unknown'];
    const RUNNING_FROM = '深度求索中';
    const RUNNING_TO = '心域探潜中';

    // The empty-session headline is re-rendered by React, so this re-runs after
    // every mutation and only touches the exact original string.
    function swapHero() {
      for (const el of document.querySelectorAll('[class*="WOwLGG_titleGroup"] > span:first-child')) {
        const text = (el.textContent || '').trim();
        if (HERO_SOURCE.includes(text)) el.textContent = HERO_LINE;
        if ((el.textContent || '').trim() === HERO_LINE) el.setAttribute('data-if-hero', '');
      }
    }

    // The live-run label ticks once a second and React rewrites it from the
    // locale, so this must run inside the observer microtask — before the
    // browser paints — or the original word flashes for a frame.
    function swapRunning() {
      for (const el of document.querySelectorAll('[data-chat-running] *')) {
        if (el.children.length > 0) continue;
        const text = el.textContent || '';
        if (text.indexOf(RUNNING_FROM) !== -1) {
          el.textContent = text.split(RUNNING_FROM).join(RUNNING_TO);
        }
      }
    }

    // Boot film: the game's own launch reel, once per window. One continuous
    // take — burst, light column, then the post-start lattice — that fades back
    // into the app when it runs out. Escape skips it.
    function playBoot() {
      const layer = document.createElement('div');
      layer.setAttribute('data-in-falsus-intro', '');
      layer.style.cssText = [
        'position:fixed', 'inset:0', 'z-index:2147483000', 'background:#000',
        'display:flex', 'align-items:center', 'justify-content:center',
        'opacity:0', 'transition:opacity 380ms ease', 'pointer-events:auto',
      ].join(';');
      const video = document.createElement('video');
      video.muted = true;
      video.playsInline = true;
      video.preload = 'auto';
      video.style.cssText = 'width:100%;height:100%;object-fit:contain;background:#000';
      layer.appendChild(video);
      document.body.appendChild(layer);
      requestAnimationFrame(() => {
        layer.style.opacity = '1';
      });

      let finished = false;

      function close() {
        if (finished) return;
        finished = true;
        window.removeEventListener('keydown', onKey, true);
        layer.style.opacity = '0';
        window.setTimeout(() => {
          try {
            video.pause();
            video.removeAttribute('src');
            video.load();
          } catch (ignored) {
            // the element is going away anyway
          }
          layer.remove();
        }, 420);
      }

      function onKey(event) {
        if (event.key === 'Escape') close();
      }

      video.addEventListener('playing', () => {
        try {
          sessionStorage.setItem(INTRO_FLAG, '1');
        } catch (ignored) {
          // storage may be unavailable; the flag is only a convenience
        }
      });
      video.addEventListener('ended', close);
      video.addEventListener('error', close);

      window.addEventListener('keydown', onKey, true);
      video.src = '/in-falsus/media/intro.mp4';
      video.play().catch(() => close());
      // Never leave the app behind a black sheet if the media cannot start.
      window.setTimeout(() => {
        if (!finished && video.readyState === 0) close();
      }, 5000);
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        try {
          if (!sessionStorage.getItem(INTRO_FLAG) && document.body) playBoot();
        } catch (ignored) {
          // storage unavailable: skip the film rather than risk a replay loop
        }

        try {
          const theme = typeof ctx.get === 'function' ? ctx.get('theme') : ctx.theme;
          if (theme && typeof theme.overrideTokens === 'function') {
            ctx.effect(() => theme.overrideTokens('@local/in-falsus', TOKENS));
          }
        } catch (error) {
          warn('theme override', error);
        }

        try {
          ctx.effect(() => {
            const style = document.createElement('style');
            style.setAttribute(MARKER, '');
            style.textContent = CSS;
            document.head.appendChild(style);
            return () => {
              if (style.parentNode) style.parentNode.removeChild(style);
            };
          });
        } catch (error) {
          warn('stylesheet', error);
        }

        try {
          ctx.effect(() => ctx.slots.inject('sidebar.brand.mark', () => ctx.slots.register({
            name: 'sidebar.brand.mark',
            // A single slot keeps one occupant per priority; the shell's own
            // mark sits at 0 and the lowest priority renders, so -1 shadows it.
            priority: -1,
          }, BrandMark)));
        } catch (error) {
          warn('brand mark', error);
        }

        try {
          ctx.effect(() => ctx.slots.inject('conversation.hero.brand.mark', () => ctx.slots.register({
            name: 'conversation.hero.brand.mark',
            priority: -1,
          }, (props) => h(BrandMark, { size: props && props.size ? props.size : 34 }))));
        } catch (error) {
          warn('hero brand mark', error);
        }

        try {
          swapHero();
          swapRunning();
          if (typeof MutationObserver === 'function') {
            let heroTimer = 0;
            const observer = new MutationObserver(() => {
              swapRunning();
              if (heroTimer) return;
              heroTimer = window.setTimeout(() => {
                heroTimer = 0;
                swapHero();
              }, 150);
            });
            observer.observe(document.body, { childList: true, subtree: true, characterData: true });
            ctx.effect(() => () => {
              observer.disconnect();
              if (heroTimer) clearTimeout(heroTimer);
            });
          }
        } catch (error) {
          warn('copy swap', error);
        }
      },
    };
  },
});

