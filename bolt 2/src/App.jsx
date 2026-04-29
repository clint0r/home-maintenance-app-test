import React from 'react';
import { IOSDevice } from './components/IOSDevice.jsx';
import { TabBar } from './components/shared.jsx';
import { HOMES } from './data.js';
import { DashboardScreen } from './screens/Dashboard.jsx';
import { ScheduleScreen } from './screens/Schedule.jsx';
import { SystemsScreen } from './screens/Systems.jsx';
import { VendorsScreen } from './screens/Vendors.jsx';
import { MoreScreen } from './screens/More.jsx';

export default function App() {
  const [tab, setTab] = React.useState('home');
  const [homeId, setHomeId] = React.useState('main');
  const home = HOMES.find(h => h.id === homeId) || HOMES[0];

  const Screen = {
    home: DashboardScreen,
    cal: ScheduleScreen,
    systems: SystemsScreen,
    vendors: VendorsScreen,
    more: MoreScreen,
  }[tab] || DashboardScreen;

  return (
    <div style={{ minHeight: '100vh', background: '#f5f3ee', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 32 }}>
      <IOSDevice width={402} height={874} dark={true}>
        <div className="app" style={{ height: '100%', position: 'relative', background: 'var(--bg)' }}>
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <Screen home={home} />
          </div>
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 40 }}>
            <TabBar active={tab} onChange={setTab} />
          </div>
        </div>
      </IOSDevice>
    </div>
  );
}
