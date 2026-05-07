import './App.css';
import { useState } from 'react';
import Home from './Home';
import AI from './AI';
import Schedule from './Schedule';
import BottomNav from './BottomNav';

function App() {
  const [screen, setScreen] = useState('Home');

  return (
    <div className="phone">
      {screen === 'Home' && <Home />}
      {screen === 'AI' && <AI />}
      {screen === 'Schedule' && <Schedule />}
      <BottomNav active={screen} onNavigate={setScreen} />
    </div>
  );
}

export default App;