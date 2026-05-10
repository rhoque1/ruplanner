import { useState } from 'react';

const tasks = [
  { id: 1, name: 'Read Chapter 7 — Thermodynamics', course: 'Physics 201', due: 'done', tag: 'Done', tagColor: '#4ade80', tagBg: '#1a2d1e', done: true },
  { id: 2, name: 'Lab Report — Pendulum Experiment', course: 'Physics 201', due: 'due tonight', tag: 'Urgent', tagColor: '#f87171', tagBg: '#2d1a1a', done: false, progress: 60 },
  { id: 3, name: 'Problem Set 4 — Calculus', course: 'Math 301', due: 'due tomorrow', tag: 'Soon', tagColor: '#60a5fa', tagBg: '#1a1f2d', done: false },
  { id: 4, name: 'Essay Outline — Modernism', course: 'English 210', due: 'due Friday', tag: 'Planned', tagColor: '#a78bfa', tagBg: '#211a2d', done: false },
];

function TaskDetail({ task, onClose }) {
  return (
    <div style={{
      position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)',
      display: 'flex', alignItems: 'flex-end', zIndex: 100
    }}>
      <div style={{
        background: '#1a1d26', borderRadius: '24px 24px 0 0',
        padding: '24px 20px 40px', width: '100%',
        border: '1px solid #2a2d35'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <p style={{ color: '#6b7280', fontSize: '12px' }}>{task.course}</p>
          <div onClick={onClose} style={{ color: '#6b7280', fontSize: '20px', cursor: 'pointer' }}>✕</div>
        </div>

        <h3 style={{ color: '#f1f3f5', fontSize: '16px', fontWeight: '600', marginBottom: '8px' }}>{task.name}</h3>

        <div style={{
          display: 'inline-block', fontSize: '11px', padding: '4px 10px',
          borderRadius: '6px', fontWeight: '500',
          color: task.tagColor, background: task.tagBg, marginBottom: '16px'
        }}>
          {task.tag}
        </div>

        <div style={{ background: '#0d0f14', borderRadius: '12px', padding: '14px 16px', marginBottom: '16px' }}>
          <p style={{ color: '#6b7280', fontSize: '11px', marginBottom: '4px' }}>DUE</p>
          <p style={{ color: '#f1f3f5', fontSize: '14px', fontWeight: '500' }}>{task.due}</p>
        </div>

        {task.progress && (
          <div style={{ background: '#0d0f14', borderRadius: '12px', padding: '14px 16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <p style={{ color: '#6b7280', fontSize: '11px' }}>PROGRESS</p>
              <p style={{ color: '#6366f1', fontSize: '11px', fontWeight: '600' }}>{task.progress}%</p>
            </div>
            <div style={{ height: '4px', background: '#1e2128', borderRadius: '4px' }}>
              <div style={{ width: `${task.progress}%`, height: '100%', background: '#6366f1', borderRadius: '4px' }} />
            </div>
          </div>
        )}

        <div style={{
          background: '#6366f1', borderRadius: '12px', padding: '14px',
          textAlign: 'center', cursor: 'pointer', marginTop: '8px'
        }}>
          <p style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>
            {task.done ? '↩ Mark as Incomplete' : '✓ Mark as Done'}
          </p>
        </div>
      </div>
    </div>
  );
}

function Task({ task, onTap }) {
  return (
    <div
      onClick={() => onTap(task)}
      onMouseEnter={e => e.currentTarget.style.borderColor = '#6366f1'}
      onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2d35'}
      style={{
        margin: '0 20px 8px',
        background: '#1a1d26',
        borderRadius: '12px',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        border: '1px solid #2a2d35',
        cursor: 'pointer',
        transition: 'border 0.2s ease'
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

function Home({ onNavigate }) {
  const [selectedTask, setSelectedTask] = useState(null);

  return (
    <div style={{ paddingBottom: '80px', overflowY: 'auto', height: '100%', position: 'relative' }}>
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

      <div
        onClick={() => onNavigate('StudySpots')}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#6366f1'}
        onMouseLeave={e => e.currentTarget.style.borderColor = '#2a2d35'}
        style={{
          margin: '12px 20px 0',
          background: '#1a1d26',
          borderRadius: '16px',
          padding: '14px 16px',
          border: '1px solid #2a2d35',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          transition: 'border 0.2s ease'
        }}
      >
        <div>
          <p style={{ color: '#f1f3f5', fontSize: '14px', fontWeight: '600' }}>📚 Find a Study Spot</p>
          <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '3px' }}>Quiet seats with outlets near you</p>
        </div>
        <span style={{ color: '#6366f1', fontSize: '20px' }}>›</span>
      </div>

      <div style={{ display: 'flex', gap: '10px', margin: '12px 20px 0' }}>
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

      {tasks.map((task) => <Task key={task.id} task={task} onTap={setSelectedTask} />)}

      {selectedTask && <TaskDetail task={selectedTask} onClose={() => setSelectedTask(null)} />}
    </div>
  );
}

export default Home;