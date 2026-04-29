// Minimal placeholder App. The full prototype's JSX has not yet been
// migrated to ES-module form — see HANDOFF.md for the conversion plan.
import React from 'react';
import { HOMES, TASKS, VENDORS } from './data.js';

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: 'Inter, system-ui, sans-serif', color: 'var(--fg)', minHeight: '100vh', background: 'var(--bg)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 0 }}>Home Maintenance — Bolt scaffold</h1>
      <p style={{ color: 'var(--fg-2)', maxWidth: 560 }}>
        Vite + React project skeleton. Design tokens, sample data, and fonts are wired.
        The prototype's screen JSX still needs to be ported from the source files in the parent zip
        (<code>screens-*.jsx</code>, <code>icons.jsx</code>, <code>ios-frame.jsx</code>, <code>design-canvas.jsx</code>).
      </p>
      <h2 style={{ fontSize: 16, marginTop: 24, color: 'var(--fg-2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Homes ({HOMES.length})</h2>
      <ul>{HOMES.map(h => <li key={h.id}>{h.label} — {h.sub}</li>)}</ul>
      <h2 style={{ fontSize: 16, marginTop: 24, color: 'var(--fg-2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tasks ({TASKS.length})</h2>
      <ul>{TASKS.map(t => <li key={t.id}>{t.title} — <span style={{ color: 'var(--fg-3)' }}>{t.due}</span></li>)}</ul>
      <h2 style={{ fontSize: 16, marginTop: 24, color: 'var(--fg-2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Vendors ({VENDORS.length})</h2>
      <ul>{VENDORS.map(v => <li key={v.id}>{v.name} — {v.specialty}</li>)}</ul>
    </div>
  );
}
