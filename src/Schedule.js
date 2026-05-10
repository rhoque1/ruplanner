import { useState } from 'react';

const classes = [
  { id: 1, name: 'Physics 201', location: 'Hill Center 114', start: '9:00 AM', end: '10:20 AM', color: '#6366f1', bg: '#1a1a2d', done: true, bus: 'College Ave → Busch', crowding: 30, depart: '8:20 AM', peak: false },
  { id: 2, name: 'Math 301', location: 'Murray Hall 212', start: '11:30 AM', end: '12:50 PM', color: '#60a5fa', bg: '#1a1f2d', done: true, bus: 'Busch → College Ave', crowding: 55, depart: '10:50 AM', peak: false },
  { id: 3, name: 'English 210', location: 'Murray Hall 106', start: '2:00 PM', end: '3:20 PM', color: '#a78bfa', bg: '#211a2d', done: false, current: true, bus: 'College Ave → Livingston', crowding: 45, depart: '1:20 PM', peak: false },
  { id: 4, name: 'CS 214', location: 'CoRE Building 301', start: '4:30 PM', end: '5:50 PM', color: '#4ade80', bg: '#1a2d1e', done: false, bus: 'Livingston → Busch', crowding: 85, depart: '3:45 PM', peak: true },
];

function CrowdingBar({ value }) {
  const color = value >= 75 ? '#f87171' : value >= 50 ? '#fbbf24' : '#4ade80';
  const label = value >= 75 ? 'Very Crowded' : value >= 50 ? 'Moderate' : 'Not Crowded';
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <p style={{ color: '#6b7280', fontSize: '11px' }}>EXPECTED CROWDING</p>
        <p style={{ color, fontSize: '11px', fontWeight: '600' }}>{label}</p>
      </div>
      <div style={{ height: '6px', background: '#1e2128', borderRadius: '4px' }}>
        <div style={{ width: `${value}%`, height: '100%', background: color, borderRadius: '4px', transition: 'width 0.4s ease' }} />
      </div>
    </div>
  );
}

function ClassDetail({ cls, onClose, onNavigate }) {
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
          <div style={{ width: '4px', height: '40px', borderRadius: '4px', background: cls.color }} />
          <div onClick={onClose} style={{ color: '#6b7280', fontSize: '20px', cursor: 'pointer' }}>✕</div>
        </div>

        <h3 style={{ color: '#f1f3f5', fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{cls.name}</h3>
        <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '20px' }}>{cls.location} · {cls.start} — {cls.end}</p>

        <div style={{ background: '#0d0f14', borderRadius: '12px', padding: '14px 16px', marginBottom: '12px' }}>
          <p style={{ color: '#6b7280', fontSize: '11px', marginBottom: '6px' }}>BUS ROUTE</p>
          <p style={{ color: '#f1f3f5', fontSize: '14px', fontWeight: '500', marginBottom: '12px' }}>🚌 {cls.bus}</p>
          <CrowdingBar value={cls.crowding} />
        </div>

        <div style={{
          background: cls.peak ? '#2d1a1a' : '#1a2d1e',
          borderRadius: '12px', padding: '14px 16px', marginBottom: '12px',
          border: `1px solid ${cls.peak ? '#f8717133' : '#4ade8033'}`
        }}>
          <p style={{ color: '#6b7280', fontSize: '11px', marginBottom: '4px' }}>SUGGESTED DEPARTURE</p>
          <p style={{ color: cls.peak ? '#f87171' : '#4ade80', fontSize: '20px', fontWeight: '600' }}>{cls.depart}</p>
          {cls.peak && <p style={{ color: '#f87171', fontSize: '11px', marginTop: '4px' }}>⚠ Peak hours — leave early to avoid full buses</p>}
        </div>

        <div style={{
          background: '#6366f1', borderRadius: '12px', padding: '14px',
          textAlign: 'center', cursor: 'pointer', marginBottom: '10px'
        }}>
          <p style={{ color: 'white', fontSize: '14px', fontWeight: '600' }}>🔔 Set Departure Reminder</p>
        </div>

        <div
          onClick={() => { onClose(); onNavigate('StudySpots'); }}
          style={{ textAlign: 'center', cursor: 'pointer', padding: '12px' }}
        >
          <p style={{ color: '#6366f1', fontSize: '13px', fontWeight: '600' }}>📚 Find Study Spot Near This Class</p>
        </div>
      </div>
    </div>
  );
}

function GapCard({ minutes, onNavigate }) {
  if (minutes < 30) return null;
  return (
    <div style={{
      margin: '0 20px 10px',
      background: '#1a1d26',
      borderRadius: '14px',
      padding: '12px 16px',
      border: '1px dashed #2a2d35',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <p style={{ color: '#4b5563', fontSize: '12px' }}>
        🕐 {minutes} min free
      </p>
      <p
        onClick={() => onNavigate('StudySpots')}
        style={{ color: '#6366f1', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
      >
        Find a spot →
      </p>
    </div>
  );
}

function ClassCard({ cls, onTap }) {
  return (
    <div
      onClick={() => onTap(cls)}
      onMouseEnter={e => e.currentTarget.style.borderColor = cls.color}
      onMouseLeave={e => e.currentTarget.style.borderColor = cls.current ? cls.color + '55' : '#2a2d35'}
      style={{
        margin: '0 20px 10px',
        background: cls.current ? cls.bg : '#1a1d26',
        borderRadius: '14px',
        padding: '14px 16px',
        border: `1px solid ${cls.current ? cls.color + '55' : '#2a2d35'}`,
        display: 'flex',
        gap: '14px',
        alignItems: 'center',
        opacity: cls.done ? 0.5 : 1,
        cursor: 'pointer',
        transition: 'border 0.2s ease'
      }}>
      <div style={{ width: '4px', borderRadius: '4px', alignSelf: 'stretch', background: cls.color, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#f1f3f5', fontSize: '14px', fontWeight: '600' }}>{cls.name}</p>
          {cls.current && (
            <span style={{
              fontSize: '10px', padding: '3px 8px', borderRadius: '6px',
              background: cls.color + '22', color: cls.color, fontWeight: '600'
            }}>NOW</span>
          )}
        </div>
        <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '3px' }}>{cls.location}</p>
        <p style={{ color: '#4b5563', fontSize: '11px', marginTop: '4px' }}>{cls.start} — {cls.end}</p>
      </div>
      <span style={{ color: '#4b5563', fontSize: '16px' }}>›</span>
    </div>
  );
}

function Schedule({ onNavigate }) {
  const [selectedClass, setSelectedClass] = useState(null);
  const [showPast, setShowPast] = useState(false);

  return (
    <div style={{ height: '100%', overflowY: 'auto', paddingBottom: '80px', position: 'relative' }}>
      <div style={{ padding: '48px 20px 16px' }}>
        <p style={{ color: '#6b7280', fontSize: '12px' }}>Wednesday, May 6</p>
        <h2 style={{ color: '#f1f3f5', fontSize: '22px', fontWeight: '600', marginTop: '4px' }}>Schedule</h2>
      </div>

      <div style={{
        margin: '0 20px 20px',
        background: '#1a1d26',
        borderRadius: '16px',
        padding: '14px 16px',
        border: '1px solid #2a2d35'
      }}>
        <p style={{ fontSize: '10px', color: '#f59e0b', fontWeight: '600', letterSpacing: '0.08em', marginBottom: '6px' }}>
          ⚠ TRANSIT ALERT
        </p>
        <p style={{ fontSize: '13px', color: '#c9cdd6', lineHeight: '1.5' }}>
          Your <span style={{ color: '#fbbf24', fontWeight: '500' }}>CS 214</span> class is at 4:30 PM — peak bus hours. Leave by <span style={{ color: '#fbbf24', fontWeight: '500' }}>3:45 PM</span> to avoid crowding.
        </p>
        <p
          onClick={() => setSelectedClass(classes.find(c => c.id === 4))}
          style={{ fontSize: '12px', color: '#f59e0b', fontWeight: '600', marginTop: '10px', cursor: 'pointer' }}
        >
          → View CS 214 details
        </p>
      </div>

      <p style={{ padding: '0 20px 10px', fontSize: '11px', fontWeight: '600', color: '#4b5563', letterSpacing: '0.08em' }}>
        TODAY'S CLASSES
      </p>

      {!showPast && classes.some(c => c.done) && (
        <div
          onClick={() => setShowPast(true)}
          style={{ textAlign: 'center', padding: '8px', cursor: 'pointer', marginBottom: '4px' }}
        >
          <p style={{ color: '#4b5563', fontSize: '12px' }}>
            {classes.filter(c => c.done).length} past class{classes.filter(c => c.done).length > 1 ? 'es' : ''} hidden · tap to show
          </p>
        </div>
      )}

      {showPast && (
        <div
          onClick={() => setShowPast(false)}
          style={{ textAlign: 'center', padding: '8px', cursor: 'pointer', marginBottom: '4px' }}
        >
          <p style={{ color: '#4b5563', fontSize: '12px' }}>Hide past classes</p>
        </div>
      )}

      {(() => {
        const visibleClasses = classes.filter(c => showPast || !c.done);
        const lastDone = classes.filter(c => c.done).at(-1);
        const firstUpcoming = classes.find(c => !c.done);
        const showFreeGap = !showPast && lastDone && firstUpcoming;
        const freeGapMinutes = showFreeGap ? (() => {
          const [h1, m1] = lastDone.end.replace(' PM','').replace(' AM','').split(':').map(Number);
          const [h2, m2] = firstUpcoming.start.replace(' PM','').replace(' AM','').split(':').map(Number);
          const end = (lastDone.end.includes('PM') && h1 !== 12 ? h1 + 12 : h1) * 60 + m1;
          const start = (firstUpcoming.start.includes('PM') && h2 !== 12 ? h2 + 12 : h2) * 60 + m2;
          return start - end;
        })() : 0;

        return (
          <>
            {showFreeGap && <GapCard minutes={freeGapMinutes} onNavigate={onNavigate} />}
            {visibleClasses.map((cls, i) => {
              const next = visibleClasses[i + 1];
              const gapMinutes = next ? (() => {
                const [h1, m1] = cls.end.replace(' PM','').replace(' AM','').split(':').map(Number);
                const [h2, m2] = next.start.replace(' PM','').replace(' AM','').split(':').map(Number);
                const end = (cls.end.includes('PM') && h1 !== 12 ? h1 + 12 : h1) * 60 + m1;
                const start = (next.start.includes('PM') && h2 !== 12 ? h2 + 12 : h2) * 60 + m2;
                return start - end;
              })() : 0;
              return (
                <div key={cls.id}>
                  <ClassCard cls={cls} onTap={setSelectedClass} />
                  <GapCard minutes={gapMinutes} onNavigate={onNavigate} />
                </div>
              );
            })}
          </>
        );
      })()}

      {selectedClass && (
        <ClassDetail
          cls={selectedClass}
          onClose={() => setSelectedClass(null)}
          onNavigate={onNavigate}
        />
      )}
    </div>
  );
}

export default Schedule;