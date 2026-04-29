import React from 'react';

const Icon = ({ d, size = 18, fill = 'none', stroke = 'currentColor', sw = 1.6, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
       strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
    {d ? <path d={d} /> : children}
  </svg>
);

export const I = {
  home: (p) => <Icon {...p}><path d="M3 11l9-8 9 8"/><path d="M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5"/><path d="M10 21v-6h4v6"/></Icon>,
  calendar: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></Icon>,
  layers: (p) => <Icon {...p}><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 18l9 5 9-5"/></Icon>,
  users: (p) => <Icon {...p}><circle cx="9" cy="8" r="3.5"/><path d="M2 21c0-3.5 3-6 7-6s7 2.5 7 6"/><path d="M16 8a3 3 0 100-6"/><path d="M22 21c0-2.5-1.5-4.5-4-5.5"/></Icon>,
  more: (p) => <Icon {...p}><circle cx="6" cy="12" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="18" cy="12" r="1.2" fill="currentColor"/></Icon>,
  bell: (p) => <Icon {...p}><path d="M6 8a6 6 0 1112 0c0 7 3 7 3 9H3c0-2 3-2 3-9z"/><path d="M10 21a2 2 0 004 0"/></Icon>,
  plus: (p) => <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>,
  search: (p) => <Icon {...p}><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.5-4.5"/></Icon>,
  chevronR: (p) => <Icon {...p}><path d="M9 6l6 6-6 6"/></Icon>,
  chevronL: (p) => <Icon {...p}><path d="M15 6l-6 6 6 6"/></Icon>,
  chevronD: (p) => <Icon {...p}><path d="M6 9l6 6 6-6"/></Icon>,
  filter: (p) => <Icon {...p}><path d="M3 5h18M6 12h12M10 19h4"/></Icon>,
  check: (p) => <Icon {...p}><path d="M4 12l5 5 11-12"/></Icon>,
  x: (p) => <Icon {...p}><path d="M6 6l12 12M18 6L6 18"/></Icon>,
  hvac: (p) => <Icon {...p}><circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3"/></Icon>,
  drop: (p) => <Icon {...p}><path d="M12 3s7 7 7 12a7 7 0 11-14 0c0-5 7-12 7-12z"/></Icon>,
  bolt: (p) => <Icon {...p}><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/></Icon>,
  tree: (p) => <Icon {...p}><path d="M12 2c-3 0-5 2-5 5 0 2 1 3 2 3-2 0-4 2-4 5 0 2 2 4 4 4h6c2 0 4-2 4-4 0-3-2-5-4-5 1 0 2-1 2-3 0-3-2-5-5-5z"/><path d="M12 19v3"/></Icon>,
  shield: (p) => <Icon {...p}><path d="M12 2l9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4z"/></Icon>,
  wrench: (p) => <Icon {...p}><path d="M14 7a4 4 0 105 5l5 5-3 3-5-5a4 4 0 01-5-5l-3-3-3 3 5 5-1 1 4 4 4-4-1-1z"/></Icon>,
  camera: (p) => <Icon {...p}><path d="M3 8a2 2 0 012-2h2l2-2h6l2 2h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/><circle cx="12" cy="13" r="3.5"/></Icon>,
  book: (p) => <Icon {...p}><path d="M4 4a2 2 0 012-2h13v18H6a2 2 0 00-2 2V4z"/><path d="M19 18H6a2 2 0 00-2 2"/></Icon>,
  phone: (p) => <Icon {...p}><path d="M5 4h4l2 5-3 2a12 12 0 006 6l2-3 5 2v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z"/></Icon>,
  mail: (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></Icon>,
  key: (p) => <Icon {...p}><circle cx="8" cy="15" r="4"/><path d="M11 13l9-9M16 8l3 3M19 5l3 3"/></Icon>,
  wifi: (p) => <Icon {...p}><path d="M2 9a15 15 0 0120 0M5 13a10 10 0 0114 0M8 17a5 5 0 018 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></Icon>,
  lock: (p) => <Icon {...p}><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 018 0v4"/></Icon>,
  spark: (p) => <Icon {...p}><path d="M12 2v4M12 18v4M5 5l3 3M16 16l3 3M2 12h4M18 12h4M5 19l3-3M16 8l3-3"/></Icon>,
  thermo: (p) => <Icon {...p}><path d="M14 4a2 2 0 10-4 0v10a4 4 0 104 0V4z"/><circle cx="12" cy="17" r="2"/></Icon>,
  sprinkler: (p) => <Icon {...p}><path d="M12 14v7M5 21h14"/><circle cx="12" cy="11" r="3"/><path d="M3 7s2-2 4-1M21 7s-2-2-4-1M12 3v3"/></Icon>,
  salt: (p) => <Icon {...p}><path d="M7 8h10l-1 13H8L7 8z"/><path d="M9 8V5h6v3"/></Icon>,
  sun: (p) => <Icon {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></Icon>,
  leaf: (p) => <Icon {...p}><path d="M3 21c0-9 8-17 18-17 0 10-8 18-18 18z"/><path d="M3 21c4-4 8-8 14-12"/></Icon>,
  snow: (p) => <Icon {...p}><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></Icon>,
  history: (p) => <Icon {...p}><path d="M3 12a9 9 0 109-9 9 9 0 00-7 3"/><path d="M3 4v4h4"/><path d="M12 7v5l3 2"/></Icon>,
  edit: (p) => <Icon {...p}><path d="M3 21l4-1L20 7l-3-3L4 17l-1 4z"/><path d="M14 5l3 3"/></Icon>,
  share: (p) => <Icon {...p}><circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="M8 11l8-4M8 13l8 4"/></Icon>,
  arrowR: (p) => <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>,
  play: (p) => <Icon {...p} fill="currentColor" stroke="none"><path d="M6 4l14 8-14 8V4z"/></Icon>,
  image: (p) => <Icon {...p}><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M3 18l5-5 4 4 3-3 6 6"/></Icon>,
  link: (p) => <Icon {...p}><path d="M10 14l4-4M9 7l3-3a4 4 0 015 5l-3 3M15 17l-3 3a4 4 0 01-5-5l3-3"/></Icon>,
  alert: (p) => <Icon {...p}><path d="M12 3l11 19H1L12 3z"/><path d="M12 10v5M12 18v.5" stroke="currentColor"/></Icon>,
  clock: (p) => <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>,
  swap: (p) => <Icon {...p}><path d="M3 7h14l-3-3M21 17H7l3 3"/></Icon>,
  download: (p) => <Icon {...p}><path d="M12 3v14M6 11l6 6 6-6M4 21h16"/></Icon>,
  pin: (p) => <Icon {...p}><path d="M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></Icon>,
  receipt: (p) => <Icon {...p}><path d="M5 3h14v18l-3-2-2 2-2-2-2 2-2-2-3 2V3z"/><path d="M9 8h6M9 12h6M9 16h4"/></Icon>,
  grid: (p) => <Icon {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></Icon>,
  fire: (p) => <Icon {...p}><path d="M12 3s5 5 5 10a5 5 0 01-10 0c0-3 2-4 2-7 0 3 3 3 3-3z"/></Icon>,
  pool: (p) => <Icon {...p}><path d="M2 17c2-1 4 1 6 0s4-1 6 0 4 1 6 0M2 21c2-1 4 1 6 0s4-1 6 0 4 1 6 0"/><path d="M7 14V5a2 2 0 014 0M13 14V5a2 2 0 014 0"/></Icon>,
  tv: (p) => <Icon {...p}><rect x="2" y="5" width="20" height="13" rx="2"/><path d="M8 21h8M10 18v3M14 18v3"/></Icon>,
};

export { Icon };
