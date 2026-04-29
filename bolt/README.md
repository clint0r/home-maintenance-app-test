# Home Maintenance App — Vite + React

iOS prototype for a multi-home maintenance app. Premium-utility aesthetic — dark accents, dense, prosumer.

## Run locally
```
npm install
npm run dev
```

## Import into Bolt.new
1. Drag this folder onto bolt.new (or zip it and upload)
2. Bolt should detect Vite + React and auto-install
3. `npm run dev` boots the prototype

## Structure
- `src/main.jsx` — entry; mounts `<App/>`
- `src/App.jsx` — design canvas + 9 artboards (each is a phone)
- `src/components/` — `IOSDevice`, `DesignCanvas`, `TweaksPanel`, etc.
- `src/screens/` — one file per screen (Dashboard, Schedule, Systems, Vendors, Runbooks, Photos, Scenarios, More)
- `src/data.js` — sample state (homes, tasks, vendors, inventory, etc.)
- `src/icons.jsx` — minimal stroke icons
- `src/styles/tokens.css` — design tokens (dark + light themes)

## Design notes
- Single sage accent on warm-cool neutrals
- Inter (body) + JetBrains Mono (numerics, codes, IDs)
- 392×844 phone canvas, iOS 26 frame
- All data in `src/data.js` is sample / mocked — wire to real backend before shipping
