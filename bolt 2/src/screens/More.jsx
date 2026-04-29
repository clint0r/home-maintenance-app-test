import React from 'react';
import { I } from '../icons.jsx';
import { HomeSwitcher, iconBtn } from '../components/shared.jsx';
import { RUNBOOKS, PEOPLE, HOMES } from '../data.js';

export function MoreScreen({ home }) {
  return (
    <div className="phone-scroll">
      <div style={{ padding: '56px 18px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HomeSwitcher home={home} />
        <button style={iconBtn}>{I.search({ size: 18 })}</button>
      </div>
      <div style={{ padding: '4px 18px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.025em', margin: '6px 0 2px' }}>More</h1>
        <div style={{ color: 'var(--fg-2)', fontSize: 14 }}>Runbooks, photos, people, settings</div>
      </div>

      <div className="section-title"><span>Runbooks</span><span className="more">{RUNBOOKS.length}</span></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {RUNBOOKS.map((r, i, a) => (
          <div key={r.id} style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i === a.length - 1 ? 'none' : '0.5px solid var(--line)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--bg-3)', color: 'var(--fg-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{I.book({ size: 16 })}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{r.title}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{r.steps} STEPS · {r.mins.toUpperCase()} · {r.tag.toUpperCase()}</div>
            </div>
            <button style={iconBtn}>{I.chevronR({ size: 14 })}</button>
          </div>
        ))}
      </div>

      <div className="section-title"><span>Access codes</span><button className="more">Reveal</button></div>
      <div style={{ padding: '0 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { l: 'Wifi', v: '••••••••', icon: 'wifi' },
          { l: 'Front door', v: '••••', icon: 'lock' },
          { l: 'Garage', v: '••••', icon: 'lock' },
          { l: 'Alarm', v: '••••', icon: 'shield' },
        ].map(c => (
          <div key={c.l} style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 12, padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ color: 'var(--fg-2)' }}>{I[c.icon]({ size: 14 })}</div>
              <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{c.l}</div>
            </div>
            <div className="mono" style={{ fontSize: 18, fontWeight: 500, marginTop: 6, letterSpacing: '0.1em' }}>{c.v}</div>
          </div>
        ))}
      </div>

      <div className="section-title"><span>Photos for insurance</span><button className="more">+ Add</button></div>
      <div style={{ padding: '0 14px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} style={{ aspectRatio: '1', background: `oklch(${0.22 + (i%3)*0.04} 0.02 ${130 + i*20})`, borderRadius: 8, position: 'relative', overflow: 'hidden', border: '0.5px solid var(--line)' }}>
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(${i*40}deg, transparent, rgba(255,255,255,0.06))` }} />
            <div style={{ position: 'absolute', bottom: 5, left: 6, fontSize: 9, color: 'rgba(255,255,255,0.6)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>{['Kitchen','Living','Mech','Garage','Roof','Yard','Pool','Ext','Bedrm'][i]}</div>
          </div>
        ))}
      </div>
      <div style={{ padding: '8px 14px 0', fontSize: 11, color: 'var(--fg-3)' }}>62 photos · 4 receipts · last backup yesterday</div>

      <div className="section-title"><span>People & sharing</span><button className="more">+ Invite</button></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {PEOPLE.map((p, i, a) => (
          <div key={p.id} style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i === a.length - 1 ? 'none' : '0.5px solid var(--line)' }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: `color-mix(in oklch, ${p.color} 25%, var(--bg-3))`, color: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{p.initials}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-2)' }}>{p.role}</div>
            </div>
            <button style={iconBtn}>{I.chevronR({ size: 14 })}</button>
          </div>
        ))}
      </div>

      <div className="section-title"><span>Smart home</span></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, padding: 14 }}>
        {[
          { l: 'Ecobee', s: 'Connected · 4 sensors', ok: true },
          { l: 'Aqara water leak', s: '6 sensors · 0 alerts', ok: true },
          { l: 'Ring', s: 'Doorbell + 2 cams', ok: true },
          { l: 'Pentair pool', s: 'Re-auth needed', ok: false },
        ].map((s, i, a) => (
          <div key={s.l} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i === a.length - 1 ? 'none' : '0.5px solid var(--line)' }}>
            <span className="dot" style={{ background: s.ok ? 'var(--accent)' : 'var(--warn)' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{s.l}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-2)' }}>{s.s}</div>
            </div>
            {!s.ok && <button className="btn btn-sm">Fix</button>}
          </div>
        ))}
      </div>

      <div className="section-title"><span>Your homes</span></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {HOMES.map((h, i, a) => (
          <div key={h.id} style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i === a.length - 1 ? 'none' : '0.5px solid var(--line)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 3, background: h.accent }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{h.label}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-2)' }}>{h.sub}</div>
            </div>
            <span className="mono tnum" style={{ fontSize: 12, color: 'var(--fg-3)' }}>{h.score}</span>
          </div>
        ))}
      </div>

      <div style={{ height: 100 }} />
    </div>
  );
}
