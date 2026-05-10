import { useState } from 'react';

const spots = [
  { id: 1, name: 'LSM Library — 3rd Floor', campus: 'Busch', noise: 'Quiet', outlets: true, food: false, distance: '4 min walk', seats: 12, tag: 'Best Pick', tagColor: '#4ade80', tagBg: '#1a2d1e' },
  { id: 2, name: 'Alexander Library', campus: 'College Ave', noise: 'Quiet', outlets: true, food: false, distance: '6 min walk', seats: 20, tag: 'Popular', tagColor: '#60a5fa', tagBg: '#1a1f2d' },
  { id: 3, name: 'Busch Student Center', campus: 'Busch', noise: 'Moderate', outlets: true, food: true, distance: '2 min walk', seats: 8, tag: 'Food Nearby', tagColor: '#fbbf24', tagBg: '#2d2310' },
  { id: 4, name: 'Hill Center Lobby', campus: 'Busch', noise: 'Moderate', outlets: false, food: false, distance: '1 min walk', seats: 5, tag: 'Closest', tagColor: '#a78bfa', tagBg: '#211a2d' },
  { id: 5, name: 'Kilmer Library', campus: 'Livingston', noise: 'Quiet', outlets: true, food: false, distance: '8 min walk', seats: 15, tag: 'Spacious', tagColor: '#60a5fa', tagBg: '#1a1f2d' },
  { id: 6, name: 'Livingston Student Center', campus: 'Livingston', noise: 'Loud', outlets: true, food: true, distance: '3 min walk', seats: 30, tag: 'Food Nearby', tagColor: '#fbbf24', tagBg: '#2d2310' },
];

const filters = ['All', 'Quiet', 'Outlets', 'Food'];

function SpotCard({ spot }) {
  return (
    <div style={{
      margin: '0 20px 10px',
      background: '#1a1d26',
      borderRadius: '14px',
      padding: '14px 16px',
      border: '1px solid #2a2d35',
      cursor: 'pointer',
      transition: 'border 0.2s ease'
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#6366f1'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2d35'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
        <p style={{ color: '#f1f3f5', fontSize: '14px', fontWeight: '600', flex: 1, paddingRight: '10px' }}>{spot.name}</p>
        <div style={{
          fontSize: '10px', padding: '3px 8px', borderRadius: '6px',
          fontWeight: '500', color: spot.tagColor, background: spot.tagBg, flexShrink: 0
        }}>{spot.tag}</div>
      </div>

      <p style={{ color: '#6b7280', fontSize: '12px', marginBottom: '10px' }}>📍 {spot.campus} · {spot.distance}</p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '11px', padding: '3px 10px', borderRadius: '20px',
          background: spot.noise === 'Quiet' ? '#1a2d1e' : spot.noise === 'Moderate' ? '#2d2310' : '#2d1a1a',
          color: spot.noise === 'Quiet' ? '#4ade80' : spot.noise === 'Moderate' ? '#fbbf24' : '#f87171'
        }}>
          {spot.noise === 'Quiet' ? '🤫' : spot.noise === 'Moderate' ? '💬' : '📢'} {spot.noise}
        </span>
        {spot.outlets && (
          <span style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '20px', background: '#1a1f2d', color: '#60a5fa' }}>
            🔌 Outlets
          </span>
        )}
        {spot.food && (
          <span style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '20px', background: '#2d2310', color: '#fbbf24' }}>
            🍔 Food
          </span>
        )}
        <span style={{ fontSize: '11px', padding: '3px 10px', borderRadius: '20px', background: '#1e2128', color: '#6b7280' }}>
          💺 {spot.seats} seats
        </span>
      </div>
    </div>
  );
}

function StudySpots({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = spots.filter(s => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Quiet') return s.noise === 'Quiet';
    if (activeFilter === 'Outlets') return s.outlets;
    if (activeFilter === 'Food') return s.food;
    return true;
  });

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: '80px', position: 'relative' }}>
      <div style={{ padding: '48px 20px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div onClick={onBack} style={{ color: '#6366f1', fontSize: '20px', cursor: 'pointer' }}>‹</div>
        <div>
          <p style={{ color: '#6b7280', fontSize: '12px' }}>On Campus</p>
          <h2 style={{ color: '#f1f3f5', fontSize: '22px', fontWeight: '600', marginTop: '2px' }}>Study Spots</h2>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '8px', padding: '0 20px 16px', overflowX: 'auto' }}>
        {filters.map(f => (
          <div
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              padding: '7px 16px', borderRadius: '20px', fontSize: '12px',
              fontWeight: '500', cursor: 'pointer', flexShrink: 0,
              background: activeFilter === f ? '#6366f1' : '#1a1d26',
              color: activeFilter === f ? 'white' : '#6b7280',
              border: `1px solid ${activeFilter === f ? '#6366f1' : '#2a2d35'}`,
              transition: 'all 0.2s ease'
            }}
          >
            {f}
          </div>
        ))}
      </div>

      <p style={{ padding: '0 20px 10px', fontSize: '11px', fontWeight: '600', color: '#4b5563', letterSpacing: '0.08em' }}>
        {filtered.length} SPOTS AVAILABLE
      </p>

      {filtered.map(spot => <SpotCard key={spot.id} spot={spot} />)}
    </div>
  );
}

export default StudySpots;