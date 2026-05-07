const messages = [
  { from: 'ai', text: "Hey Alex! I've looked at your schedule. You have a gap from 2–3 PM today. Want me to find you a quiet study spot near Hill Center?" },
  { from: 'user', text: "Yes please, somewhere with outlets" },
  { from: 'ai', text: "LSM Library 3rd floor has available seats with outlets right now. It's a 4-min walk from Hill Center. Want me to set a reminder to head there after your 1 PM class?" },
  { from: 'user', text: "Yes! Also how's the Livi bus looking?" },
  { from: 'ai', text: "The Livi bus is usually packed between 4–6 PM. Since your next class is at 4:30, I'd suggest leaving by 3:45 to be safe. Want me to remind you?" },
];

function AI() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '48px 20px 12px', borderBottom: '1px solid #1e2128' }}>
        <p style={{ color: '#6b7280', fontSize: '12px' }}>Powered by Claude</p>
        <h2 style={{ color: '#f1f3f5', fontSize: '18px', fontWeight: '600' }}>AI Assistant</h2>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '75%',
              padding: '10px 14px',
              borderRadius: msg.from === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
              background: msg.from === 'user' ? '#4f46e5' : '#1a1d26',
              color: msg.from === 'user' ? '#ffffff' : '#c9cdd6',
              fontSize: '13px',
              lineHeight: '1.5',
              border: msg.from === 'ai' ? '1px solid #2a2d35' : 'none'
            }}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '12px 20px 88px', borderTop: '1px solid #1e2128' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          background: '#1a1d26', borderRadius: '24px',
          padding: '10px 16px', border: '1px solid #2a2d35'
        }}>
          <input
            placeholder="Ask anything..."
            style={{
              flex: 1, background: 'none', border: 'none', outline: 'none',
              color: '#f1f3f5', fontSize: '13px'
            }}
          />
          <span style={{ color: '#4f46e5', fontSize: '18px', cursor: 'pointer' }}>↑</span>
        </div>
      </div>
    </div>
  );
}

export default AI;