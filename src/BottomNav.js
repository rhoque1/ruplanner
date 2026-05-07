function BottomNav({ active, onNavigate }) {
  return (
    <div style={{
      position: 'absolute',
      bottom: 0, left: 0, right: 0,
      height: '68px',
      background: '#0d0f14',
      borderTop: '1px solid #1e2128',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      padding: '0 10px 8px'
    }}>
      {['Home', 'Schedule', 'AI', 'Progress', 'Profile'].map((item) => (
        <div key={item} onClick={() => onNavigate(item)} style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '3px', cursor: 'pointer'
        }}>
          <span style={{
            fontSize: '11px',
            color: active === item ? '#6366f1' : '#374151'
          }}>
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}

export default BottomNav;