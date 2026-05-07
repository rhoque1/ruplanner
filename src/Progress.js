const goals = [
  { id: 1, name: 'Finish Physics lab reports on time', progress: 75, color: '#6366f1' },
  { id: 2, name: 'Study 2 hours daily between classes', progress: 50, color: '#60a5fa' },
  { id: 3, name: 'Submit all Math problem sets early', progress: 40, color: '#a78bfa' },
  { id: 4, name: 'Read all English course material', progress: 90, color: '#4ade80' },
];

function GoalCard({ goal }) {
  return (
    <div style={{
      margin: '0 20px 10px',
      background: '#1a1d26',
      borderRadius: '14px',
      padding: '14px 16px',
      border: '1px solid #2a2d35'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <p style={{ color: '#e2e5ec', fontSize: '13px', fontWeight: '500', flex: 1, paddingRight: '12px' }}>{goal.name}</p>
        <p style={{ color: goal.color, fontSize: '13px', fontWeight: '600', flexShrink: 0 }}>{goal.progress}%</p>
      </div>
      <div style={{ height: '4px', background: '#1e2128', borderRadius: '4px' }}>
        <div style={{ width: `${goal.progress}%`, height: '100%', background: goal.color, borderRadius: '4px' }} />
      </div>
    </div>
  );
}

function Progress() {
  const currentWeek = 9;
  const totalWeeks = 15;
  const semesterProgress = Math.round((currentWeek / totalWeeks) * 100);

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: '80px' }}>
      <div style={{ padding: '48px 20px 16px' }}>
        <p style={{ color: '#6b7280', fontSize: '12px' }}>Spring 2025</p>
        <h2 style={{ color: '#f1f3f5', fontSize: '22px', fontWeight: '600', marginTop: '4px' }}>Progress</h2>
      </div>

      <div style={{
        margin: '0 20px 20px',
        background: '#1a1d26',
        borderRadius: '16px',
        padding: '16px',
        border: '1px solid #2a2d35'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <p style={{ color: '#f1f3f5', fontSize: '14px', fontWeight: '600' }}>Semester Progress</p>
          <span style={{
            fontSize: '11px', padding: '3px 10px', borderRadius: '6px',
            background: '#1e2a1e', color: '#4ade80', fontWeight: '600'
          }}>Week {currentWeek} of {totalWeeks}</span>
        </div>
        <div style={{ height: '6px', background: '#1e2128', borderRadius: '4px' }}>
          <div style={{ width: `${semesterProgress}%`, height: '100%', background: '#6366f1', borderRadius: '4px' }} />
        </div>
        <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '8px' }}>{totalWeeks - currentWeek} weeks remaining in the semester</p>
      </div>

      <div style={{ display: 'flex', gap: '10px', margin: '0 20px 20px' }}>
        {[
          { num: '12', label: 'Tasks done' },
          { num: '4', label: 'Remaining' },
          { num: '67%', label: 'On track' },
        ].map((s) => (
          <div key={s.label} style={{
            flex: 1, background: '#1a1d26', borderRadius: '12px',
            padding: '12px', border: '1px solid #2a2d35', textAlign: 'center'
          }}>
            <p style={{ fontSize: '22px', fontWeight: '600', color: '#f1f3f5' }}>{s.num}</p>
            <p style={{ fontSize: '10px', color: '#4b5563', marginTop: '2px' }}>{s.label}</p>
          </div>
        ))}
      </div>

      <p style={{ padding: '0 20px 10px', fontSize: '11px', fontWeight: '600', color: '#4b5563', letterSpacing: '0.08em' }}>
        SEMESTER GOALS
      </p>

      {goals.map((goal) => <GoalCard key={goal.id} goal={goal} />)}
    </div>
  );
}

export default Progress;