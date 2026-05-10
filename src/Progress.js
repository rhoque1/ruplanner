import { useState } from 'react';

const initialGoals = [
  { id: 1, name: 'Finish Physics lab reports on time', progress: 75, color: '#6366f1' },
  { id: 2, name: 'Study 2 hours daily between classes', progress: 50, color: '#60a5fa' },
  { id: 3, name: 'Submit all Math problem sets early', progress: 40, color: '#a78bfa' },
  { id: 4, name: 'Read all English course material', progress: 90, color: '#4ade80' },
];

function AddGoal({ onClose, onAdd }) {
  const [name, setName] = useState('');
  const colors = ['#6366f1', '#60a5fa', '#a78bfa', '#4ade80', '#fbbf24', '#f87171'];
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  

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
          <p style={{ color: '#f1f3f5', fontSize: '16px', fontWeight: '600' }}>New Goal</p>
          <div onClick={onClose} style={{ color: '#6b7280', fontSize: '20px', cursor: 'pointer' }}>✕</div>
        </div>

        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="e.g. Finish all assignments early"
          style={{
            width: '100%', background: '#0d0f14', border: '1px solid #2a2d35',
            borderRadius: '12px', padding: '12px 14px', color: '#f1f3f5',
            fontSize: '14px', marginBottom: '16px', outline: 'none',
            fontFamily: 'DM Sans, sans-serif'
          }}
        />

        <p style={{ color: '#6b7280', fontSize: '11px', marginBottom: '10px' }}>PICK A COLOR</p>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          {colors.map(c => (
            <div
              key={c}
              onClick={() => setSelectedColor(c)}
              style={{
                width: '28px', height: '28px', borderRadius: '50%', background: c,
                cursor: 'pointer', border: selectedColor === c ? '2px solid white' : '2px solid transparent',
                transition: 'border 0.2s ease'
              }}
            />
          ))}
        </div>

        <div
          onClick={() => { if (name.trim()) { onAdd({ name, color: selectedColor }); onClose(); } }}
          style={{
            background: name.trim() ? '#6366f1' : '#2a2d35',
            borderRadius: '12px', padding: '14px',
            textAlign: 'center', cursor: name.trim() ? 'pointer' : 'default',
            transition: 'background 0.2s ease'
          }}
        >
          <p style={{ color: name.trim() ? 'white' : '#4b5563', fontSize: '14px', fontWeight: '600' }}>+ Add Goal</p>
        </div>
      </div>
    </div>
  );
}

function GoalDetail({ goal, onClose, onUpdateProgress, onDelete }) {
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
          <p style={{ color: '#6b7280', fontSize: '12px' }}>SEMESTER GOAL</p>
          <div onClick={onClose} style={{ color: '#6b7280', fontSize: '20px', cursor: 'pointer' }}>✕</div>
        </div>

        <h3 style={{ color: '#f1f3f5', fontSize: '16px', fontWeight: '600', marginBottom: '20px' }}>{goal.name}</h3>

        <div style={{ background: '#0d0f14', borderRadius: '12px', padding: '14px 16px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <p style={{ color: '#6b7280', fontSize: '11px' }}>PROGRESS</p>
            <p style={{ color: goal.color, fontSize: '11px', fontWeight: '600' }}>{goal.progress}%</p>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={goal.progress}
            onChange={e => onUpdateProgress(goal.id, parseInt(e.target.value))}
            style={{ width: '100%', accentColor: goal.color }}
          />
        </div>

        <div style={{
          background: '#6366f1', borderRadius: '12px', padding: '14px',
          textAlign: 'center', cursor: 'pointer', marginBottom: '10px'
        }}
          onClick={onClose}
        >
          <p style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>Save Progress</p>
        </div>

        <div
          onClick={() => { onDelete(goal.id); onClose(); }}
          style={{ textAlign: 'center', padding: '10px', cursor: 'pointer' }}
        >
          <p style={{ color: '#f87171', fontSize: '13px' }}>Delete goal</p>
        </div>
      </div>
    </div>
  );
}

function GoalCard({ goal, onTap }) {
  return (
    <div
      onClick={() => onTap(goal)}
      style={{
        margin: '0 20px 10px',
        background: '#1a1d26',
        borderRadius: '14px',
        padding: '14px 16px',
        border: '1px solid #2a2d35',
        cursor: 'pointer'
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
  const [goals, setGoals] = useState(initialGoals);
  const [selectedGoalId, setSelectedGoalId] = useState(null);
  const selectedGoal = goals.find(g => g.id === selectedGoalId) || null;
  const currentWeek = 9;
  const totalWeeks = 15;
  const semesterProgress = Math.round((currentWeek / totalWeeks) * 100);
  const [showAddGoal, setShowAddGoal] = useState(false);


  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: '80px', position: 'relative' }}>
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

      {goals.map((goal) => <GoalCard key={goal.id} goal={goal} onTap={(g) => setSelectedGoalId(g.id)} />)}

      <div
        onClick={() => setShowAddGoal(true)}
        style={{
          position: 'absolute', bottom: '90px', right: '20px',
          width: '48px', height: '48px', borderRadius: '50%',
          background: '#6366f1', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '24px', color: 'white',
          cursor: 'pointer', boxShadow: '0 4px 16px rgba(99,102,241,0.4)', zIndex: 50
        }}
      >
        +
      </div>

      {showAddGoal && (
        <AddGoal
          onClose={() => setShowAddGoal(false)}
          onAdd={(newGoal) => setGoals(prev => [...prev, {
            ...newGoal, id: Date.now(), progress: 0
          }])}
        />
      )}

      {selectedGoal && (
        <GoalDetail
          goal={selectedGoal}
          onClose={() => setSelectedGoalId(null)}
          onUpdateProgress={(id, val) => setGoals(prev => prev.map(g => g.id === id ? { ...g, progress: val } : g))}
          onDelete={(id) => setGoals(prev => prev.filter(g => g.id !== id))}
        />
      )}
    </div>
  );
}

export default Progress;