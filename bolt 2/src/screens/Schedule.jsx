import React from 'react';
import { I } from '../icons.jsx';
import { HomeSwitcher, SystemBadge, iconBtn } from '../components/shared.jsx';
import { TASKS } from '../data.js';
import { TaskRow } from './Dashboard.jsx';

export function ScheduleScreen({ home, layout = 'list' }) {
  const [view, setView] = React.useState(layout);
  const [filter, setFilter] = React.useState('All');
  const cadences = ['All', 'Weekly', 'Monthly', 'Quarterly', 'Annual', 'Bi-annual'];
  const filtered = TASKS.filter(t => filter === 'All' || t.cadence === filter);
  return (
    <div className="phone-scroll">
      <div style={{ padding: '56px 18px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <HomeSwitcher home={home} />
        <div style={{ display: 'flex', gap: 8 }}>
          <button style={iconBtn}>{I.search({ size: 18 })}</button>
          <button style={iconBtn}>{I.plus({ size: 18 })}</button>
        </div>
      </div>
      <div style={{ padding: '4px 18px 0' }}>
        <h1 style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.025em', margin: '6px 0 2px' }}>Schedule</h1>
        <div style={{ color: 'var(--fg-2)', fontSize: 14 }}>10 active · <span style={{ color: 'var(--warn)' }}>2 due today</span></div>
      </div>
      <div style={{ padding: '14px 18px 8px', display: 'flex', gap: 6 }}>
        {[['list','Agenda','calendar'],['wheel','Year','sun']].map(([v,l,ic]) => (
          <button key={v} onClick={() => setView(v)} style={{
            display:'flex', alignItems:'center', gap:6, padding: '7px 12px', borderRadius: 8,
            background: view === v ? 'var(--bg-2)' : 'transparent',
            border: '0.5px solid ' + (view === v ? 'var(--line-strong)' : 'transparent'),
            color: view === v ? 'var(--fg)' : 'var(--fg-2)', fontSize: 13, fontWeight: 500,
          }}>{I[ic]({ size: 14 })} {l}</button>
        ))}
      </div>
      <div style={{ padding: '4px 18px 12px', display: 'flex', gap: 6, overflowX: 'auto' }}>
        {cadences.map(c => (
          <button key={c} onClick={() => setFilter(c)} style={{
            padding: '6px 11px', borderRadius: 999, fontSize: 12, fontWeight: 500,
            background: filter === c ? 'var(--accent)' : 'var(--bg-2)',
            color: filter === c ? '#0a0c08' : 'var(--fg-1)',
            border: '0.5px solid ' + (filter === c ? 'transparent' : 'var(--line)'),
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>{c}</button>
        ))}
      </div>
      {view === 'list' ? <AgendaList tasks={filtered} /> : <SeasonalWheel tasks={TASKS} />}
      <div style={{ height: 100 }} />
    </div>
  );
}

function AgendaList({ tasks }) {
  const groups = [
    { title: 'Due now', items: tasks.filter(t => t.due === 'Today' || (t.due.includes('days') && parseInt(t.due.match(/\d+/)?.[0] || 99) <= 7)) },
    { title: 'This month', items: tasks.filter(t => !(t.due === 'Today' || (t.due.includes('days') && parseInt(t.due.match(/\d+/)?.[0] || 99) <= 7)) && !t.dueFar) },
    { title: 'Later this year', items: tasks.filter(t => t.dueFar) },
  ].filter(g => g.items.length);
  return (
    <div>
      {groups.map((g, gi) => (
        <div key={gi}>
          <div className="section-title"><span>{g.title}</span><span className="more mono">{g.items.length}</span></div>
          <div style={{ margin: '0 14px', background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
            {g.items.map((t, i) => <TaskRow key={t.id} task={t} last={i === g.items.length - 1} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

function SeasonalWheel({ tasks }) {
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const seasonByMonth = (i) => i < 2 || i === 11 ? 'winter' : i < 5 ? 'spring' : i < 8 ? 'summer' : 'fall';
  const seasonColor = { winter: 'oklch(0.72 0.06 230)', spring: 'oklch(0.74 0.10 145)', summer: 'oklch(0.78 0.12 75)', fall: 'oklch(0.68 0.12 50)' };
  const taskMonth = (t) => {
    if (t.due === 'Today') return new Date().getMonth();
    const m = t.due.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
    return m ? months.indexOf(m[1]) : new Date().getMonth();
  };
  const cx = 170, cy = 170, rOuter = 138, rInner = 80;
  const segAngle = 360 / 12;
  const polar = (deg, r) => {
    const rad = ((deg - 90) * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const arcPath = (i) => {
    const a0 = i * segAngle, a1 = (i+1) * segAngle - 1;
    const [x0, y0] = polar(a0, rOuter), [x1, y1] = polar(a1, rOuter);
    const [x2, y2] = polar(a1, rInner), [x3, y3] = polar(a0, rInner);
    return `M ${x0} ${y0} A ${rOuter} ${rOuter} 0 0 1 ${x1} ${y1} L ${x2} ${y2} A ${rInner} ${rInner} 0 0 0 ${x3} ${y3} Z`;
  };
  const monthTasks = months.map((_, i) => tasks.filter(t => taskMonth(t) === i));
  const currentMonth = new Date().getMonth();
  return (
    <div style={{ padding: '0 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '12px 0 8px' }}>
        <svg width="340" height="340" style={{ overflow: 'visible' }}>
          {months.map((m, i) => {
            const s = seasonByMonth(i);
            const isCur = i === currentMonth;
            const [tx, ty] = polar(i * segAngle + segAngle/2, (rOuter+rInner)/2 + 14);
            return (
              <g key={i}>
                <path d={arcPath(i)} fill={`color-mix(in oklch, ${seasonColor[s]} ${isCur ? 26 : 12}%, transparent)`}
                      stroke={isCur ? seasonColor[s] : 'var(--line)'} strokeWidth={isCur ? 1.2 : 0.5} />
                <text x={tx} y={ty} textAnchor="middle" dy="0.35em" fontFamily="var(--font-mono)" fontSize="10" fontWeight="500" fill={isCur ? 'var(--fg)' : 'var(--fg-2)'} letterSpacing="0.05em">{m.toUpperCase()}</text>
                {monthTasks[i].slice(0,3).map((_, di) => {
                  const [dx, dy] = polar(i * segAngle + segAngle/2, (rOuter+rInner)/2 - 14 + di * 7);
                  return <circle key={di} cx={dx} cy={dy} r="2.2" fill={seasonColor[s]} />;
                })}
              </g>
            );
          })}
          <circle cx={cx} cy={cy} r={rInner-4} fill="var(--bg-1)" stroke="var(--line)" strokeWidth="0.5" />
          <text x={cx} y={cy-10} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="11" fill="var(--fg-3)" letterSpacing="0.08em">2026</text>
          <text x={cx} y={cy+8} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="22" fontWeight="600" fill="var(--fg)">{tasks.length}</text>
          <text x={cx} y={cy+24} textAnchor="middle" fontFamily="var(--font-sans)" fontSize="10" fill="var(--fg-2)">tasks scheduled</text>
        </svg>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 6px 16px', fontSize: 11, color: 'var(--fg-2)' }}>
        {[['Winter', seasonColor.winter],['Spring', seasonColor.spring],['Summer', seasonColor.summer],['Fall', seasonColor.fall]].map(([l,c]) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: c }} />{l}
          </div>
        ))}
      </div>
      <div className="section-title" style={{ padding: 0 }}><span>This month</span></div>
      <div style={{ background: 'var(--bg-1)', border: '0.5px solid var(--line)', borderRadius: 14, overflow: 'hidden' }}>
        {monthTasks[currentMonth].slice(0,4).map((t, i, arr) => <TaskRow key={t.id} task={t} last={i === arr.length-1} />)}
      </div>
    </div>
  );
}
