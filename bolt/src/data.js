// src/data.js — sample state for the prototype
export const HOMES = [
  { id: 'main', label: 'Mount Pleasant', sub: 'Primary · Calgary, AB', score: 88, accent: 'oklch(0.74 0.10 145)' },
  { id: 'cabin', label: 'Oak Bay Cottage', sub: 'Secondary · Victoria, BC', score: 72, accent: 'oklch(0.72 0.12 60)' },
  { id: 'rental', label: 'Inglewood Loft', sub: 'Rental · Airbnb host', score: 81, accent: 'oklch(0.72 0.10 230)' },
];

export const TASKS = [
  { id: 't1', title: 'Clean gutters & downspouts', system: 'Exterior', cadence: 'Bi-annual', due: 'In 6 days', dueFar: false, season: 'fall', vendor: 'Bow Valley Gutters', auto: true, est: '90m', status: 'scheduled' },
  { id: 't2', title: 'HVAC filter replacement', system: 'HVAC', cadence: 'Quarterly', due: 'Today', dueFar: false, season: 'all', vendor: null, auto: false, est: '10m', status: 'due' },
  { id: 't3', title: 'Test smoke + CO detectors', system: 'Safety', cadence: 'Quarterly', due: 'Today', dueFar: false, season: 'all', vendor: null, auto: false, est: '15m', status: 'due' },
  { id: 't4', title: 'Sprinkler system startup', system: 'Outdoor', cadence: 'Annual', due: 'Apr 18', dueFar: false, season: 'spring', vendor: 'Chinook Irrigation', auto: true, est: 'Vendor', status: 'in_progress' },
  { id: 't5', title: 'Refill water softener salt', system: 'Plumbing', cadence: 'Monthly', due: 'In 12 days', dueFar: false, season: 'all', vendor: null, auto: false, est: '20m', status: 'upcoming' },
  { id: 't6', title: 'Service tankless water heater', system: 'Plumbing', cadence: 'Annual', due: 'Jun 4', dueFar: true, season: 'summer', vendor: 'Foothills Plumbing', auto: false, est: 'Vendor', status: 'upcoming' },
  { id: 't7', title: 'Inspect roof + flashing', system: 'Exterior', cadence: 'Annual', due: 'May 22', dueFar: true, season: 'spring', vendor: 'Rocky Mountain Roofing', auto: false, est: 'Vendor', status: 'upcoming' },
  { id: 't8', title: 'Drain & winterize pool', system: 'Outdoor', cadence: 'Annual', due: 'Oct 12', dueFar: true, season: 'fall', vendor: 'Pacific Pools', auto: true, est: 'Vendor', status: 'upcoming' },
  { id: 't9', title: 'Garage door tune-up', system: 'Mechanical', cadence: 'Annual', due: 'Sep 8', dueFar: true, season: 'fall', vendor: null, auto: false, est: '45m', status: 'upcoming' },
  { id: 't10', title: 'Chimney sweep', system: 'Safety', cadence: 'Annual', due: 'Sep 30', dueFar: true, season: 'fall', vendor: 'Hearth & Stone', auto: true, est: 'Vendor', status: 'upcoming' },
];

export const VENDORS = [
  { id: 'v1', name: 'Bow Valley Gutters', specialty: 'Gutters · Downspouts', primary: true, last: 'Last visit Apr 2025', phone: '403 555 0118', auto: true },
  { id: 'v2', name: 'Chinook Irrigation', specialty: 'Sprinkler · Backflow', primary: true, last: 'Visit scheduled Apr 18', phone: '403 555 0042', auto: true },
  { id: 'v3', name: 'Foothills Plumbing', specialty: 'Plumbing · Water heater', primary: true, last: 'Last visit Nov 2025', phone: '403 555 0233', auto: false },
  { id: 'v4', name: 'Rocky Mountain Roofing', specialty: 'Roof · Flashing · Skylights', primary: false, last: 'Last visit May 2024', phone: '403 555 0709', auto: false },
  { id: 'v5', name: 'Pacific Pools', specialty: 'Pool · Spa · Equipment', primary: true, last: 'Visit scheduled Oct 12', phone: '250 555 0911', auto: true },
  { id: 'v6', name: 'Hearth & Stone', specialty: 'Chimney · Fireplace', primary: true, last: 'Last visit Oct 2025', phone: '403 555 0344', auto: true },
];

export const INVENTORY = [
  { id: 'i1', name: 'Carrier Infinity 26 Heat Pump', system: 'HVAC', installed: '2022-08-14', warrantyEnds: '2032-08-14', warrantyHealth: 0.7, model: '25VNA8', serial: '4521A92831' },
  { id: 'i2', name: 'Rinnai RU199 Tankless WH', system: 'Plumbing', installed: '2023-03-02', warrantyEnds: '2035-03-02', warrantyHealth: 0.85, model: 'RU199iN', serial: 'BR4429-77321' },
  { id: 'i3', name: 'Culligan HE Softener', system: 'Plumbing', installed: '2021-11-10', warrantyEnds: '2026-11-10', warrantyHealth: 0.18, model: 'HE 1.25', serial: 'CG-882910' },
  { id: 'i4', name: 'GE Profile Range', system: 'Appliance', installed: '2024-01-22', warrantyEnds: '2026-01-22', warrantyHealth: 0.4, model: 'P2S930YPFS', serial: 'GE71221A' },
  { id: 'i5', name: 'Generac 22kW Standby', system: 'Power', installed: '2020-05-19', warrantyEnds: '2025-05-19', warrantyHealth: 0.04, model: '7043', serial: 'GN902112' },
  { id: 'i6', name: 'Pentair IntelliFlo Pump', system: 'Pool', installed: '2023-06-30', warrantyEnds: '2028-06-30', warrantyHealth: 0.62, model: 'VSF', serial: 'PT-IF-2233' },
];

export const RUNBOOKS = [
  { id: 'r1', title: 'Operate the pool heater', steps: 8, mins: '6 min read', tag: 'Pool · Outdoor' },
  { id: 'r2', title: 'Reset the home theater receiver', steps: 5, mins: '3 min read', tag: 'AV · Theater' },
  { id: 'r3', title: 'Wifi & door codes (guests)', steps: 4, mins: '2 min read', tag: 'Access' },
  { id: 'r4', title: 'Shut off main water in an emergency', steps: 6, mins: '4 min read', tag: 'Plumbing · Safety' },
  { id: 'r5', title: 'Operate the wood-burning fireplace', steps: 7, mins: '5 min read', tag: 'Fireplace · Safety' },
];

export const PEOPLE = [
  { id: 'p1', name: 'You', role: 'Owner', initials: 'YO', color: 'oklch(0.74 0.10 145)' },
  { id: 'p2', name: 'Sarah', role: 'Co-owner', initials: 'SA', color: 'oklch(0.72 0.12 60)' },
  { id: 'p3', name: 'Marcus', role: 'Caretaker · Cabin', initials: 'MK', color: 'oklch(0.72 0.10 230)' },
  { id: 'p4', name: 'Lena', role: 'Cleaner · Loft', initials: 'LE', color: 'oklch(0.70 0.13 320)' },
];

export const ALERTS = [
  { id: 'a1', kind: 'low', title: 'Water softener salt low', sub: 'Culligan HE · est. 9 days remaining', icon: 'salt', source: 'Smart bridge', urgency: 'warn' },
  { id: 'a2', kind: 'auto', title: 'Sprinkler ready to enable', sub: 'Chinook confirmed startup · awaiting your OK', icon: 'sprinkler', source: 'Chinook · 2h ago', urgency: 'info' },
  { id: 'a3', kind: 'thermostat', title: 'Spring thermostat schedule', sub: 'Switch to cooling profile?', icon: 'thermo', source: 'Ecobee · today', urgency: 'info' },
];
