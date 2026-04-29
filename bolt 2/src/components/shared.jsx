import React from 'react';
import { I } from '../icons.jsx';

export const iconBtn = {
  width: 36, height: 36, borderRadius: 10, background: 'var(--bg-2)',
  border: '0.5px solid var(--line)', color: 'var(--fg-1)',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

export function TabBar({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'cal', label: 'Schedule', icon: 'calendar' },
    { id: 'systems', label: 'Systems', icon: 'layers' },
    { id: 'vendors', label: 'Vendors', icon: 'users' },
    { id: 'more', label: 'More', icon: 'grid' },
  ];
  return (
    <div className="tab-bar">
      {tabs.map(t => (
        <button key={t.id} className={'tab ' + (active === t.id ? 'active' : '')} onClick={() => onChange?.(t.id)}>
          <span className="icon">{I[t.icon]({ size: 22 })}</span>
          <span>{t.label}</span>
        </button>
      ))}
    </div>
  );
}

export function HomeSwitcher({ home }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', borderRadius: 999, background: 'var(--bg-2)', border: '0.5px solid var(--line)' }}>
      <span style={{ width: 8, height: 8, borderRadius: 2, background: home.accent }} />
      <span style={{ fontSize: 13, fontWeight: 500, whiteSpace: 'nowrap' }}>{home.label.replace(/ (House|Cottage|Loft)$/, '')}</span>
      {I.chevronD({ size: 14 })}
    </div>
  );
}

export function ScoreRing({ value, size = 56, stroke = 4 }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--line-strong)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--accent)" strokeWidth={stroke}
              strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off}
              transform={`rotate(-90 ${size/2} ${size/2})`} />
      <text x="50%" y="50%" textAnchor="middle" dy="0.35em"
            fontFamily="var(--font-sans)" fontWeight="600" fontSize={size*0.34} fill="var(--fg)">{value}</text>
    </svg>
  );
}

export function Sparkline({ data = [3,5,4,6,7,5,8,7,9,8,10,12], color }) {
  const w = 120, h = 28;
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
    return `${x},${y}`;
  }).join(' ');
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="spark" preserveAspectRatio="none">
      <polyline fill="none" stroke={color || 'var(--accent)'} strokeWidth="1.3" points={pts} />
    </svg>
  );
}

export function SystemBadge({ system }) {
  const map = {
    HVAC: { i: 'hvac', c: 'oklch(0.74 0.09 230)' },
    Plumbing: { i: 'drop', c: 'oklch(0.72 0.10 230)' },
    Power: { i: 'bolt', c: 'oklch(0.78 0.13 75)' },
    Outdoor: { i: 'tree', c: 'oklch(0.74 0.10 145)' },
    Exterior: { i: 'home', c: 'oklch(0.70 0.06 50)' },
    Safety: { i: 'shield', c: 'oklch(0.66 0.17 25)' },
    Mechanical: { i: 'wrench', c: 'oklch(0.72 0.06 280)' },
    Appliance: { i: 'spark', c: 'oklch(0.72 0.10 320)' },
    Pool: { i: 'pool', c: 'oklch(0.74 0.10 230)' },
  };
  const m = map[system] || map.Mechanical;
  return (
    <div style={{ width: 28, height: 28, borderRadius: 7, background: `color-mix(in oklch, ${m.c} 18%, transparent)`,
      color: m.c, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      {I[m.i]({ size: 16, sw: 1.7 })}
    </div>
  );
}
