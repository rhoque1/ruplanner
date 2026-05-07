function Home() {
  return (
    <div style={{ padding: '48px 20px 0', color: 'white' }}>
      <p style={{ color: '#6b7280', fontSize: '13px' }}>Wednesday, May 6</p>
      <h1 style={{ fontSize: '22px', fontWeight: '600', marginTop: '4px' }}>Hey, Alex 👋</h1>

      <div style={{
        marginTop: '16px',
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
    </div>
  );
}

export default Home;