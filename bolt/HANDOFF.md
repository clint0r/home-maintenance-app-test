# Handoff — Vite/React conversion

The prototype was built as a single-file HTML + Babel-in-browser app. This `bolt/` folder is the start of a Vite + React port for Bolt.new.

## What's done
- `package.json`, `vite.config.js`, `index.html` — runnable Vite scaffold
- `src/main.jsx`, `src/styles/tokens.css` — entry + design tokens (dark + light)
- `src/data.js` — all sample data, converted to ES exports
- `src/App.jsx` — placeholder app that renders the data so you can verify it boots

## Still to do
The screen JSX needs porting. In the parent project zip you have:
- `icons.jsx` — minimal stroke icons (export const I = {...})
- `ios-frame.jsx` — IOSDevice, IOSStatusBar, etc.
- `design-canvas.jsx` — DesignCanvas, DCSection, DCArtboard
- `tweaks-panel.jsx` — TweaksPanel, TweakSection, TweakRadio, etc.
- `screens-dashboard.jsx`, `screens-schedule.jsx`, `screens-systems.jsx`, `screens-vendors.jsx`, `screens-more.jsx` — screen components

For each:
1. Replace `window.X = X` patterns with `export { X }` (or `export default`)
2. Replace `window.HOMES`, `window.TASKS`, etc. with `import { HOMES, TASKS } from './data.js'`
3. Replace `window.I` with `import { I } from './icons.jsx'`
4. Drop `React.` prefixes if you add `import React from 'react'` at the top
5. Cross-screen helpers (`HomeSwitcher`, `TabBar`, `iconBtn`) live in `screens-schedule.jsx` — extract those to a shared `components/` folder

## Run it
```bash
npm install
npm run dev
```

Open http://localhost:5173 — placeholder app should render with tokens applied.
