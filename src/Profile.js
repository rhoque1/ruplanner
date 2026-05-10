const courses = [
  { name: 'Physics 201', campus: 'Busch', color: '#6366f1' },
  { name: 'Math 301', campus: 'College Ave', color: '#60a5fa' },
  { name: 'English 210', campus: 'College Ave', color: '#a78bfa' },
  { name: 'CS 214', campus: 'Busch', color: '#4ade80' },
];

const settings = [
  { icon: '🔔', label: 'Bus Departure Reminders', value: 'On' },
  { icon: '🌧️', label: 'Weather Alerts', value: 'On' },
  { icon: '🎯', label: 'Goal Nudges', value: 'On' },
  { icon: '🚌', label: 'Default Campus', value: 'Busch' },
];

function Profile() {
  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: '80px' }}>
      <div style={{ padding: '48px 20px 24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{
          width: '64px', height: '64px', borderRadius: '50%',
          background: '#4f46e5', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '22px', fontWeight: '600', color: 'white',
          flexShrink: 0
        }}>AJ</div>
        <div>
          <h2 style={{ color: '#f1f3f5', fontSize: '20px', fontWeight: '600' }}>Alex Johnson</h2>
          <p style={{ color: '#6b7280', fontSize: '13px', marginTop: '2px' }}>Junior · Computer Science</p>
          <p style={{ color: '#6b7280', fontSize: '13px' }}>Rutgers University — New Brunswick</p>
        </div>
      </div>

      <p style={{ padding: '0 20px 10px', fontSize: '11px', fontWeight: '600', color: '#4b5563', letterSpacing: '0.08em' }}>
        MY COURSES
      </p>

      <div style={{ margin: '0 20px 24px', background: '#1a1d26', borderRadius: '14px', border: '1px solid #2a2d35', overflow: 'hidden' }}>
        {courses.map((course, i) => (
          <div key={course.name} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '12px 16px',
            borderBottom: i < courses.length - 1 ? '1px solid #2a2d35' : 'none'
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: course.color, flexShrink: 0 }} />
            <p style={{ color: '#e2e5ec', fontSize: '13px', fontWeight: '500', flex: 1 }}>{course.name}</p>
            <p style={{ color: '#4b5563', fontSize: '12px' }}>{course.campus}</p>
          </div>
        ))}
      </div>

      <p style={{ padding: '0 20px 10px', fontSize: '11px', fontWeight: '600', color: '#4b5563', letterSpacing: '0.08em' }}>
        PREFERENCES
      </p>

      <div style={{ margin: '0 20px 24px', background: '#1a1d26', borderRadius: '14px', border: '1px solid #2a2d35', overflow: 'hidden' }}>
        {settings.map((s, i) => (
          <div key={s.label} style={{
            display: 'flex', alignItems: 'center', gap: '12px',
            padding: '13px 16px',
            borderBottom: i < settings.length - 1 ? '1px solid #2a2d35' : 'none',
            cursor: 'pointer'
          }}>
            <span style={{ fontSize: '16px' }}>{s.icon}</span>
            <p style={{ color: '#e2e5ec', fontSize: '13px', flex: 1 }}>{s.label}</p>
            <p style={{ color: '#6366f1', fontSize: '12px', fontWeight: '600' }}>{s.value}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', padding: '16px 20px', cursor: 'pointer' }}>
        <p style={{ color: '#4b5563', fontSize: '13px' }}>Sign Out</p>
      </div>
    </div>
  );
}

export default Profile;