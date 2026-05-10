const navItems = [
  { name: 'Home', icon: '⌂' },
  { name: 'Schedule', icon: '📅' },
  { name: 'AI', icon: '✦' },
  { name: 'Progress', icon: '📈' },
  { name: 'Profile', icon: '👤' },
];

function BottomNav({ active, onNavigate }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      height: '75px',
      background: '#0d0f14',
      borderTop: '1px solid #1e2128',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '0 6px 10px'
    }}>
      {navItems.map((item) => (
        <div
          key={item.name}
          onClick={() => onNavigate(item.name)}
          style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '4px',
            cursor: 'pointer', flex: 1, padding: '8px 4px',
            borderRadius: '12px',
            background: active === item.name ? '#1a1d26' : 'none',
            border: active === item.name ? '1px solid #2a2d35' : '1px solid transparent',
            transition: 'all 0.2s ease'
          }}
        >
          <span style={{ fontSize: '20px', lineHeight: 1 }}>{item.icon}</span>
          <span style={{
            fontSize: '10px', fontWeight: active === item.name ? '600' : '400',
            color: active === item.name ? '#6366f1' : '#4b5563'
          }}>
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BottomNav;