import React from 'react';
import { I } from '../icons.jsx';
import { HomeSwitcher, SystemBadge, iconBtn } from '../components/shared.jsx';
import { INVENTORY } from '../data.js';

export function SystemsScreen({ home }) {
  const [tab, setTab] = React.useState('plan');
  return (
    <div className="phone-scroll">
      <div style={{ padding: '56px 18px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HomeSwitcher home={home} />
        <button style={iconBtn}>{I.plus({ size: 18 })}</button>
      </div>
      <div style={{ padding: '4px 18px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.025em', margin: '6px 0 2px' }}>Systems</h1>
        <div style={{ color: 'var(--fg-2)', fontSize: 14 }}>{INVENTORY.length} items tracked · $48k warranty value</div>
      </div>
      <div style={{ padding: '14px 18px 4px', display: 'flex', gap: 18, borderBottom: '0.5px solid var(--line)', margin: '0 0 4px' }}>
        {[['plan','Floor plan'],['list','Inventory'],['warranty','Warranties']].map(([id,l]) => (
          <button key={id} onClick={() => setTab(id)} style={{
            padding: '8px 0', fontSize: 13, fontWeight: 500,
            color: tab === id ? 'var(--fg)' : 'var(--fg-3)',
            borderBottom: tab === id ? '1.5px solid var(--accent)' : '1.5px solid transparent',
            marginBottom: -0.5,
          }}>{l}</button>
        ))}
      </div>
      {tab === 'plan' && <FloorPlan />}
      {tab === 'list' && <InventoryList />}
      {tab === 'warranty' && <WarrantyList />}
      <div style={{ height: 100 }} />
    </div>
  );
}

function FloorPlan() {
  const [sel, setSel] = React.useState('hvac');
  const pins = [
    { id: 'hvac', x: 80, y: 75, label: 'HVAC', sys: 'HVAC', detail: 'Carrier 26 · Filter due' },
    { id: 'wh', x: 65, y: 130, label: 'Water heater', sys: 'Plumbing', detail: 'Rinnai · OK' },
    { id: 'soft', x: 110, y: 130, label: 'Softener', sys: 'Plumbing', detail: 'Salt at 18%' },
    { id: 'gen', x: 240, y: 70, label: 'Generator', sys: 'Power', detail: 'Warranty expires May 19' },
    { id: 'sprink', x: 270, y: 230, label: 'Sprinkler', sys: 'Outdoor', detail: 'Booked Apr 18' },
    { id: 'pool', x: 60, y: 230, label: 'Pool', sys: 'Pool', detail: 'Pump · IntelliFlo' },
  ];
  const selected = pins.find(p => p.id === sel);
  return (
    <div>
      <div style={{ padding: '12px 14px 8px' }}>
        <div style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, padding: 14, position: 'relative', overflow: 'hidden' }}>
          <svg viewBox="0 0 320 280" width="100%" height="240" style={{ display: 'block' }}>
            <rect x="20" y="20" width="280" height="240" fill="var(--bg-2)" stroke="var(--line-strong)" strokeWidth="1" rx="2" />
            <line x1="20" y1="100" x2="160" y2="100" stroke="var(--line-strong)" strokeWidth="1" />
            <line x1="160" y1="20" x2="160" y2="180" stroke="var(--line-strong)" strokeWidth="1" />
            <line x1="160" y1="180" x2="300" y2="180" stroke="var(--line-strong)" strokeWidth="1" />
            <line x1="100" y1="100" x2="100" y2="180" stroke="var(--line-strong)" strokeWidth="1" />
            <line x1="20" y1="180" x2="160" y2="180" stroke="var(--line-strong)" strokeWidth="1" />
            <text x="60" y="62" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">UTILITY</text>
            <text x="230" y="62" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">GARAGE</text>
            <text x="60" y="142" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">MECH</text>
            <text x="130" y="142" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">KIT</text>
            <text x="230" y="142" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">LIVING</text>
            <text x="80" y="222" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">BACK YARD</text>
            <text x="230" y="222" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9" fill="var(--fg-3)" letterSpacing="0.05em">PATIO</text>
            {pins.map(p => {
              const isSel = p.id === sel;
              return (
                <g key={p.id} onClick={() => setSel(p.id)} style={{ cursor: 'pointer' }}>
                  <circle cx={p.x} cy={p.y} r={isSel ? 10 : 7} fill={isSel ? 'var(--accent)' : 'var(--bg-3)'} stroke={isSel ? 'var(--accent)' : 'var(--line-strong)'} strokeWidth="1.5" />
                  {isSel && <circle cx={p.x} cy={p.y} r="14" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.4"/>}
                </g>
              );
            })}
          </svg>
          {selected && (
            <div style={{ marginTop: 10, paddingTop: 12, borderTop: '0.5px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <SystemBadge system={selected.sys} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{selected.label}</div>
                <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{selected.detail}</div>
              </div>
              <button className="btn btn-sm">Open</button>
            </div>
          )}
        </div>
      </div>
      <div className="section-title"><span>By system</span></div>
      <div style={{ padding: '0 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {['HVAC','Plumbing','Power','Outdoor','Safety','Pool'].map(s => (
          <div key={s} style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 10, padding: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
            <SystemBadge system={s} />
            <div style={{ flex: 1, fontSize: 13, fontWeight: 500 }}>{s}</div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)' }}>{(s.length % 4) + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InventoryList() {
  return (
    <div style={{ padding: '12px 14px 0' }}>
      <div style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {INVENTORY.map((it, i, a) => (
          <div key={it.id} style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: i === a.length - 1 ? 'none' : '0.5px solid var(--line)' }}>
            <SystemBadge system={it.system} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</div>
              <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2, letterSpacing: '0.02em' }}>{it.model} · S/N {it.serial}</div>
            </div>
            <button style={iconBtn}>{I.chevronR({ size: 14 })}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function WarrantyList() {
  return (
    <div style={{ padding: '12px 14px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
      {INVENTORY.map(it => {
        const pct = Math.round(it.warrantyHealth * 100);
        const color = pct < 15 ? 'var(--danger)' : pct < 40 ? 'var(--warn)' : 'var(--accent)';
        return (
          <div key={it.id} style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 12, padding: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <SystemBadge system={it.system} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.name}</div>
                <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 1 }}>Expires {it.warrantyEnds}</div>
              </div>
              <div className="mono tnum" style={{ fontSize: 13, color, fontWeight: 600 }}>{pct}%</div>
            </div>
            <div style={{ height: 4, borderRadius: 2, background: 'var(--bg-3)', marginTop: 10, overflow: 'hidden' }}>
              <div style={{ width: `${pct}%`, height: '100%', background: color }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
