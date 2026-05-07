const tasks = [
  { id: 1, name: 'Read Chapter 7 — Thermodynamics', course: 'Physics 201', due: 'done', tag: 'Done', tagColor: '#4ade80', tagBg: '#1a2d1e', done: true },
  { id: 2, name: 'Lab Report — Pendulum Experiment', course: 'Physics 201', due: 'due tonight', tag: 'Urgent', tagColor: '#f87171', tagBg: '#2d1a1a', done: false, progress: 60 },
  { id: 3, name: 'Problem Set 4 — Calculus', course: 'Math 301', due: 'due tomorrow', tag: 'Soon', tagColor: '#60a5fa', tagBg: '#1a1f2d', done: false },
  { id: 4, name: 'Essay Outline — Modernism', course: 'English 210', due: 'due Friday', tag: 'Planned', tagColor: '#a78bfa', tagBg: '#211a2d', done: false },
];

function Task({ task }) {
  return (
    <div style={{
      margin: '0 20px 8px',
      background: '#1a1d26',
      borderRadius: '12px',
      padding: '12px 14px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      border: '1px solid #2a2d35'
    }}>
      <div style={{
        width: '20px', height: '20px', borderRadius: '50%',
        border: task.done ? 'none' : '1.5px solid #374151',
        background: task.done ? '#4f46e5' : 'none',
        flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '11px', color: 'white'
      }}>
        {task.done && '✓'}
      </div>

      <div style={{ flex: 1 }}>
        <p style={{
          color: task.done ? '#4b5563' : '#e2e5ec',
          fontSize: '13px', fontWeight: '500',
          textDecoration: task.done ? 'line-through' : 'none'
        }}>{task.name}</p>
        <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '2px' }}>
          {task.course} · {task.due}
        </p>
        {task.progress && (
          <div style={{ height: '3px', background: '#1e2128', borderRadius: '2px', marginTop: '6px' }}>
            <div style={{ width: `${task.progress}%`, height: '100%', background: '#6366f1', borderRadius: '2px' }} />
          </div>
        )}
      </div>

      <div style={{
        fontSize: '10px', padding: '3px 8px', borderRadius: '6px',
        fontWeight: '500', color: task.tagColor, background: task.tagBg
      }}>
        {task.tag}
      </div>
    </div>
  );
}

function Home() {
  return (
    <div style={{ paddingBottom: '80px', overflowY: 'auto', height: '100%' }}>
      <div style={{ padding: '48px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: '#6b7280', fontSize: '12px' }}>Wednesday, May 6</p>
          <h1 style={{ color: '#f1f3f5', fontSize: '22px', fontWeight: '600', marginTop: '4px' }}>Hey, Alex 👋</h1>
        </div>
        <div style={{
          width: '38px', height: '38px', borderRadius: '50%',
          background: '#4f46e5', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '13px', fontWeight: '600', color: 'white'
        }}>AJ</div>
      </div>

      <div style={{
        margin: '16px 20px 0',
        background: '#1a1d26',
        borderRadius: '16px',
        padding: '14px 16px',
        border: '1px solid #2a2d35'
      }}>
        <p style={{ fontSize: '10px', color: '#6366f1', fontWeight: '600', letterSpacing: '0.08em', marginBottom: '6px' }}>
          ✦ AI INSIGHT
        </p>
        <p style={{ fontSize: '13px', color: '#c9cdd6', lineHeight: '1.5' }}>
          You have <span style={{ color: '#818cf8', fontWeight: '500' }}>3 deadlines</span> this week. Your busiest day is <span style={{ color: '#818cf8', fontWeight: '500' }}>Thursday</span> — I'd suggest finishing the lab report today.
        </p>
      </div>

      <div style={{ display: 'flex', gap: '10px', margin: '16px 20px 0' }}>
        {[
          { num: '4', label: 'Tasks left' },
          { num: '3', label: 'Deadlines' },
          { num: '67%', label: 'Complete' },
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

      <p style={{ padding: '18px 20px 8px', fontSize: '11px', fontWeight: '600', color: '#4b5563', letterSpacing: '0.08em' }}>
        TODAY'S TASKS
      </p>

      {tasks.map((task) => <Task key={task.id} task={task} />)}
    </div>
  );
}

export default Home;