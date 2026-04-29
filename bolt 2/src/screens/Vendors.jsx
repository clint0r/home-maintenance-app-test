import React from 'react';
import { I } from '../icons.jsx';
import { HomeSwitcher, SystemBadge, iconBtn } from '../components/shared.jsx';
import { VENDORS, TASKS } from '../data.js';

export function VendorsScreen({ home }) {
  const [sel, setSel] = React.useState(null);
  return (
    <div className="phone-scroll">
      <div style={{ padding: '56px 18px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HomeSwitcher home={home} />
        <button style={iconBtn}>{I.plus({ size: 18 })}</button>
      </div>
      <div style={{ padding: '4px 18px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.025em', margin: '6px 0 2px' }}>Vendors</h1>
        <div style={{ color: 'var(--fg-2)', fontSize: 14 }}>{VENDORS.length} contacts · 4 on auto-schedule</div>
      </div>
      <div style={{ padding: '14px 18px 4px' }}>
        <div style={{ background: 'var(--bg-2)', border: '0.5px solid var(--line)', borderRadius: 10, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          {I.search({ size: 16 })}
          <span style={{ color: 'var(--fg-3)', fontSize: 14 }}>Search vendors or specialty</span>
        </div>
      </div>
      <div className="section-title"><span>Primary</span><span className="more">{VENDORS.filter(v => v.primary).length}</span></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {VENDORS.filter(v => v.primary).map((v, i, a) => (
          <VendorRow key={v.id} v={v} last={i === a.length - 1} onClick={() => setSel(v)} />
        ))}
      </div>
      <div className="section-title"><span>Backup</span></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {VENDORS.filter(v => !v.primary).map((v, i, a) => (
          <VendorRow key={v.id} v={v} last={i === a.length - 1} onClick={() => setSel(v)} />
        ))}
      </div>
      <div className="section-title"><span>Auto-email schedule</span><button className="more">Edit</button></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, padding: 14 }}>
        {[
          { task: 'Gutter cleaning', vendor: 'Bow Valley Gutters', when: 'Sep 22 · 7 days before', status: 'queued' },
          { task: 'Sprinkler startup', vendor: 'Chinook Irrigation', when: 'Sent Apr 11', status: 'sent' },
          { task: 'Pool winterize', vendor: 'Pacific Pools', when: 'Oct 5 · 7 days before', status: 'queued' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 2 ? '0.5px solid var(--line)' : 'none' }}>
            <div style={{ width: 28, height: 28, borderRadius: 7, background: 'var(--bg-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fg-1)' }}>{I.mail({ size: 14 })}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{r.task}</div>
              <div style={{ fontSize: 11, color: 'var(--fg-2)' }}>{r.vendor} · <span className="mono">{r.when}</span></div>
            </div>
            <span className={'pill ' + (r.status === 'sent' ? 'pill-ok' : 'pill-mute')}>{r.status}</span>
          </div>
        ))}
      </div>
      <div style={{ height: 100 }} />
      {sel && <VendorSheet v={sel} onClose={() => setSel(null)} />}
    </div>
  );
}

function VendorRow({ v, last, onClick }) {
  const initials = v.name.split(' ').map(s => s[0]).slice(0, 2).join('');
  return (
    <button onClick={onClick} style={{ width: '100%', textAlign: 'left', padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: last ? 'none' : '0.5px solid var(--line)' }}>
      <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--bg-3)', color: 'var(--fg-1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{initials}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{v.name}</div>
        <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>{v.specialty}</div>
        <div style={{ fontSize: 11, color: 'var(--fg-3)', marginTop: 2 }}>{v.last}</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
        {v.auto && <span className="pill pill-info">Auto</span>}
        <span className="mono" style={{ fontSize: 10, color: 'var(--fg-3)' }}>{v.phone}</span>
      </div>
    </button>
  );
}

function VendorSheet({ v, onClose }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, display: 'flex', flexDirection: 'column' }}>
      <div onClick={onClose} style={{ flex: 1, background: 'rgba(0,0,0,0.55)' }} />
      <div style={{ background: 'var(--bg-1)', borderTopLeftRadius: 22, borderTopRightRadius: 22, padding: 18, paddingBottom: 36 }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: 'var(--bg-3)', margin: '0 auto 14px' }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--bg-3)', color: 'var(--fg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{v.name.split(' ').map(s => s[0]).slice(0, 2).join('')}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{v.name}</div>
            <div style={{ fontSize: 13, color: 'var(--fg-2)' }}>{v.specialty}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <button className="btn" style={{ flex: 1 }}>{I.phone({ size: 14 })} Call</button>
          <button className="btn" style={{ flex: 1 }}>{I.mail({ size: 14 })} Email</button>
          <button className="btn btn-primary" style={{ flex: 1 }}>{I.calendar({ size: 14 })} Book</button>
        </div>
        <div style={{ marginTop: 16, fontSize: 12, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Linked tasks</div>
        <div style={{ marginTop: 8 }}>
          {TASKS.filter(t => t.vendor === v.name).map((t, i, a) => (
            <div key={t.id} style={{ padding: '10px 0', borderBottom: i < a.length - 1 ? '0.5px solid var(--line)' : 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
              <SystemBadge system={t.system} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, fontWeight: 500 }}>{t.title}</div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-2)' }}>{t.due.toUpperCase()} · {t.cadence}</div>
              </div>
              {t.auto && <span className="pill pill-info">Auto</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
