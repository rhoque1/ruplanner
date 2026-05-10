import { useState } from 'react';

const initialTasks = [
  { id: 1, name: 'Read Chapter 7 — Thermodynamics', course: 'Physics 201', due: 'May 5', tag: 'Done', tagColor: '#4ade80', tagBg: '#1a2d1e', done: true },
  { id: 2, name: 'Lab Report — Pendulum Experiment', course: 'Physics 201', due: 'May 6', tag: 'Urgent', tagColor: '#f87171', tagBg: '#2d1a1a', done: false, progress: 60 },
  { id: 3, name: 'Problem Set 4 — Calculus', course: 'Math 301', due: 'May 7', tag: 'Soon', tagColor: '#60a5fa', tagBg: '#1a1f2d', done: false },
  { id: 4, name: 'Essay Outline — Modernism', course: 'English 210', due: 'May 9', tag: 'Planned', tagColor: '#a78bfa', tagBg: '#211a2d', done: false },
];

function TaskDetail({ task, onClose, onToggleDone, onUpdateProgress }) {
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

       `{!task.done && (
          <div style={{ background: '#0d0f14', borderRadius: '12px', padding: '14px 16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <p style={{ color: '#6b7280', fontSize: '11px' }}>PROGRESS</p>
              <p style={{ color: '#6366f1', fontSize: '11px', fontWeight: '600' }}>{task.progress || 0}%</p>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={task.progress || 0}
              onChange={e => onUpdateProgress(task.id, parseInt(e.target.value))}
              style={{ width: '100%', accentColor: '#6366f1' }}
            />
          </div>
        )}

        <div
          onClick={() => { onToggleDone(task.id); onClose(); }}
          style={{
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

function AddTask({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('Physics 201');
  const [due, setDue] = useState('');

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <p style={{ color: '#f1f3f5', fontSize: '16px', fontWeight: '600' }}>New Task</p>
          <div onClick={onClose} style={{ color: '#6b7280', fontSize: '20px', cursor: 'pointer' }}>✕</div>
        </div>

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Task name"
          style={{
            width: '100%', background: '#0d0f14', border: '1px solid #2a2d35',
            borderRadius: '12px', padding: '12px 14px', color: '#f1f3f5',
            fontSize: '14px', marginBottom: '12px', outline: 'none',
            fontFamily: 'DM Sans, sans-serif'
          }}
        />

        <select
          value={course}
          onChange={e => setCourse(e.target.value)}
          style={{
            width: '100%', background: '#0d0f14', border: '1px solid #2a2d35',
            borderRadius: '12px', padding: '12px 14px', color: '#f1f3f5',
            fontSize: '14px', marginBottom: '12px', outline: 'none',
            fontFamily: 'DM Sans, sans-serif'
          }}
        >
          <option>Physics 201</option>
          <option>Math 301</option>
          <option>English 210</option>
          <option>CS 214</option>
        </select>

        <input
          value={due}
          onChange={e => setDue(e.target.value)}
          placeholder="Due date (e.g. due Friday)"
          style={{
            width: '100%', background: '#0d0f14', border: '1px solid #2a2d35',
            borderRadius: '12px', padding: '12px 14px', color: '#f1f3f5',
            fontSize: '14px', marginBottom: '20px', outline: 'none',
            fontFamily: 'DM Sans, sans-serif'
          }}
        />

        <div
          onClick={() => { if (name.trim()) { onAdd({ name, course, due }); onClose(); } }}
          style={{
            background: name.trim() ? '#6366f1' : '#2a2d35',
            borderRadius: '12px', padding: '14px',
            textAlign: 'center', cursor: name.trim() ? 'pointer' : 'default',
            transition: 'background 0.2s ease'
          }}
        >
          <p style={{ color: name.trim() ? 'white' : '#4b5563', fontSize: '14px', fontWeight: '600' }}>
            + Add Task
          </p>
        </div>
      </div>
    </div>
  );
}

function Home({ onNavigate }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const selectedTask = tasks.find(t => t.id === selectedTaskId) || null;
  const [showDone, setShowDone] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

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
        <p
          onClick={() => setSelectedTaskId(2)}
          style={{ fontSize: '12px', color: '#6366f1', fontWeight: '600', marginTop: '10px', cursor: 'pointer' }}
        >
          → Open task
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

      {tasks.filter(t => !t.done).map((task) => (
        <Task key={task.id} task={task} onTap={(task) => setSelectedTaskId(task.id)} />
      ))}

      <div
        onClick={() => setShowDone(prev => !prev)}
        style={{ textAlign: 'center', padding: '10px', cursor: 'pointer' }}
      >
        <p style={{ color: '#4b5563', fontSize: '12px' }}>
          {showDone ? 'Hide completed' : `${tasks.filter(t => t.done).length} completed ✓`}
        </p>
      </div>

      {showDone && tasks.filter(t => t.done).map((task) => (
        <Task key={task.id} task={task} onTap={(task) => setSelectedTaskId(task.id)} />
      ))}

      <div
        onClick={() => setShowAddTask(true)}
        style={{
          position: 'absolute',
          bottom: '90px',
          right: '20px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#6366f1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(99,102,241,0.4)',
          zIndex: 50
        }}
      >
        +
      </div>

      {selectedTask && (
        <TaskDetail
          task={selectedTask}
          onClose={() => setSelectedTaskId(null)}
          onToggleDone={(id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t))}
          onUpdateProgress={(id, val) => setTasks(prev => prev.map(t => t.id === id ? { ...t, progress: val } : t))}
        />
      )}
      {showAddTask && (
        <AddTask
          onClose={() => setShowAddTask(false)}
          onAdd={(newTask) => setTasks(prev => [...prev, {
            ...newTask,
            id: Date.now(),
            tag: 'Planned',
            tagColor: '#a78bfa',
            tagBg: '#211a2d',
            done: false
          }])}
        />
      )}
    </div>
  );
}

export default Home;