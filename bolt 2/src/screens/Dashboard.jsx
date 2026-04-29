import React from 'react';
import { I } from '../icons.jsx';
import { HomeSwitcher, ScoreRing, Sparkline, SystemBadge, iconBtn } from '../components/shared.jsx';
import { TASKS, ALERTS } from '../data.js';

function HealthHero({ home }) {
  return (
    <div style={{ margin: '14px 14px 0', padding: 18, background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 18 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ScoreRing value={home.score} size={72} stroke={5} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Home health</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>Good standing</div>
          <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 2 }}>2 items pulling score down</div>
        </div>
        <button style={iconBtn}>{I.chevronR({ size: 16 })}</button>
      </div>
      <div style={{ height: 0.5, background: 'var(--line)', margin: '14px -18px' }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
        {[
          { label: 'Tasks done', val: '14', sub: 'this quarter' },
          { label: 'Coming due', val: '6', sub: 'next 30 days' },
          { label: 'Warranty value', val: '$48k', sub: 'covered' },
        ].map(s => (
          <div key={s.label} style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>{s.label}</div>
            <div className="tnum" style={{ fontSize: 22, fontWeight: 600, marginTop: 2, letterSpacing: '-0.02em' }}>{s.val}</div>
            <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 1 }}>{s.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AgendaHero({ home }) {
  const today = TASKS.filter(t => t.due === 'Today');
  return (
    <div style={{ margin: '14px 14px 0', padding: 18, background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 18 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Today's agenda</div>
        <div className="tnum" style={{ fontSize: 11, color: 'var(--fg-2)', fontFamily: 'var(--font-mono)' }}>~25 min</div>
      </div>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {today.map(t => (
          <div key={t.id} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 18, height: 18, borderRadius: 5, border: '1.2px solid var(--line-strong)' }} />
            <div style={{ flex: 1, fontSize: 14, fontWeight: 500 }}>{t.title}</div>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-2)' }}>{t.est}</span>
          </div>
        ))}
      </div>
      <button className="btn btn-primary" style={{ width: '100%', marginTop: 14 }}>{I.play({ size: 14 })} Start agenda</button>
    </div>
  );
}

function CompactHero({ home }) {
  return (
    <div style={{ margin: '14px 14px 0', padding: '14px 16px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, display: 'flex', alignItems: 'center', gap: 14 }}>
      <ScoreRing value={home.score} size={44} stroke={3.5} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600 }}>Score {home.score} · Good</div>
        <div style={{ fontSize: 12, color: 'var(--fg-2)' }}>2 due today · 3 alerts · 6 booked</div>
      </div>
      <button style={iconBtn}>{I.chevronR({ size: 16 })}</button>
    </div>
  );
}

function AlertCard({ alert }) {
  const palette = { warn: 'var(--warn)', info: 'var(--info)', bad: 'var(--danger)' }[alert.urgency];
  return (
    <div style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderLeft: `3px solid ${palette}`, borderRadius: 12, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: `color-mix(in oklch, ${palette} 16%, transparent)`, color: palette, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {I[alert.icon]({ size: 18 })}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 500 }}>{alert.title}</div>
        <div style={{ fontSize: 12, color: 'var(--fg-2)', marginTop: 1 }}>{alert.sub}</div>
        <div style={{ fontSize: 10, color: 'var(--fg-3)', marginTop: 4, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{alert.source}</div>
      </div>
      <button className="btn btn-sm" style={{ background: 'var(--bg-3)' }}>Resolve</button>
    </div>
  );
}

function SystemTile({ sys, sub, stat, spark }) {
  const dot = stat === 'ok' ? 'var(--accent)' : stat === 'warn' ? 'var(--warn)' : 'var(--info)';
  return (
    <div style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 12, padding: 12 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <SystemBadge system={sys} />
        <div style={{ flex: 1 }}><div style={{ fontSize: 13, fontWeight: 600 }}>{sys}</div></div>
        <span className="dot" style={{ background: dot }} />
      </div>
      <Sparkline data={spark} color={dot} />
      <div style={{ fontSize: 11, color: 'var(--fg-2)', marginTop: 2 }}>{sub}</div>
    </div>
  );
}

export function TaskRow({ task, last }) {
  const dueColor = task.due === 'Today' ? 'var(--warn)' : task.due.startsWith('In') ? 'var(--fg-1)' : 'var(--fg-2)';
  return (
    <div style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, borderBottom: last ? 'none' : '0.5px solid var(--line)' }}>
      <SystemBadge system={task.system} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 14.5, fontWeight: 500, color: 'var(--fg)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{task.title}</div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 3, fontSize: 12, color: 'var(--fg-2)' }}>
          <span className="mono" style={{ color: dueColor }}>{task.due.toUpperCase()}</span>
          <span style={{ color: 'var(--fg-3)' }}>·</span>
          <span>{task.cadence}</span>
          {task.vendor && <><span style={{ color: 'var(--fg-3)' }}>·</span><span>{task.vendor}</span></>}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
        {task.status === 'in_progress' && <span className="pill pill-info">Booked</span>}
        {task.status === 'due' && <span className="pill pill-warn">Due</span>}
        {task.auto && <span style={{ fontSize: 10, color: 'var(--fg-3)', display: 'flex', alignItems: 'center', gap: 3 }}>{I.mail({ size: 10 })} auto</span>}
      </div>
    </div>
  );
}

export function DashboardScreen({ home, layout = 'health' }) {
  return (
    <div className="phone-scroll">
      <div style={{ padding: '56px 18px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HomeSwitcher home={home} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={iconBtn}>{I.bell({ size: 18 })}</button>
          <button style={iconBtn}>{I.share({ size: 18 })}</button>
        </div>
      </div>
      <div style={{ padding: '8px 18px 0' }}>
        <div style={{ color: 'var(--fg-2)', fontSize: 13 }}>Wednesday · April 29</div>
        <h1 style={{ fontSize: 30, fontWeight: 600, letterSpacing: '-0.025em', margin: '4px 0 2px' }}>Good morning.</h1>
      </div>
      {layout === 'health' && <HealthHero home={home} />}
      {layout === 'agenda' && <AgendaHero home={home} />}
      {layout === 'compact' && <CompactHero home={home} />}
      <div className="section-title"><span>Needs attention</span><span className="more">{ALERTS.length}</span></div>
      <div style={{ padding: '0 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {ALERTS.map(a => <AlertCard key={a.id} alert={a} />)}
      </div>
      <div className="section-title"><span>Today</span><span className="more">2</span></div>
      <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {TASKS.filter(t => t.due === 'Today').map((t,i,a) => <TaskRow key={t.id} task={t} last={i === a.length-1} />)}
      </div>
      <div className="section-title"><span>Systems at a glance</span><button className="more">See all</button></div>
      <div style={{ padding: '0 14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        {[
          { sys: 'HVAC', sub: 'Filter due today', stat: 'warn', spark: [4,5,4,3,5,4,6,5,7,6,8,9] },
          { sys: 'Plumbing', sub: 'Salt at 18%', stat: 'warn', spark: [10,9,8,7,7,6,5,4,3,3,2,2] },
          { sys: 'Outdoor', sub: 'Sprinkler booked', stat: 'info', spark: [2,3,3,4,5,6,7,8,8,9,10,11] },
          { sys: 'Safety', sub: 'All operational', stat: 'ok', spark: [10,10,10,11,10,10,11,10,10,11,10,10] },
        ].map(s => <SystemTile key={s.sys} {...s} />)}
      </div>
      <div style={{ height: 100 }} />
    </div>
  );
}
