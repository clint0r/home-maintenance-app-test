# Home Maintenance — Bolt scaffold

A Vite + React port of the home-maintenance prototype. Drop this folder into Bolt.new (or run locally) and it boots.

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## Project layout
```
src/
  main.jsx            # entry
  App.jsx             # tab navigation + iOS device frame
  data.js             # HOMES, TASKS, VENDORS, INVENTORY, RUNBOOKS, PEOPLE, ALERTS
  icons.jsx           # stroke icon set (export const I = {...})
  styles/tokens.css   # design tokens (dark + light), .pill, .btn, .tab-bar, etc.
  components/
    IOSDevice.jsx     # iPhone bezel + dynamic island + status bar + home indicator
    shared.jsx        # TabBar, HomeSwitcher, ScoreRing, Sparkline, SystemBadge, iconBtn
  screens/
    Dashboard.jsx     # health score · alerts · today · systems-at-a-glance
    Schedule.jsx      # agenda list + seasonal year-wheel toggle
    Systems.jsx       # floor plan / inventory / warranty tabs
    Vendors.jsx       # contacts + auto-email schedule + detail sheet
    More.jsx          # runbooks · access codes · photos · people · smart home · homes
```

## Design system
- Dark default (warm-cool neutrals + sage accent). Light theme via `.theme-light` on root.
- Tokens are CSS custom props in `styles/tokens.css`.
- Type: Inter (UI) + JetBrains Mono (numerics, codes, timestamps).
- Tabular numbers via `.tnum`. Mono accents via `.mono`.

## Data
All sample state is in `src/data.js` as plain ES exports. Ten tasks, six vendors, six inventory items, three homes, five runbooks, four people, three alerts.

## Next steps
- Persist `tab` and `homeId` to localStorage if desired.
- Wire the placeholder photo grid in `screens/More.jsx` to a real image source.
- Add tweak controls (theme/dashboard layout) — original prototype had a TweaksPanel.
