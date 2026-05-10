import './App.css';
import { useState } from 'react';
import Home from './Home';
import AI from './AI';
import Schedule from './Schedule';
import Progress from './Progress';
import StudySpots from './StudySpots';
import BottomNav from './BottomNav';

function App() {
  const [screen, setScreen] = useState('Home');

  return (
    <div className="phone">
      {screen === 'Home' && <Home onNavigate={setScreen} />}
      {screen === 'AI' && <AI />}
      {screen === 'Schedule' && <Schedule />}
      {screen === 'Progress' && <Progress />}
      {screen === 'StudySpots' && <StudySpots onBack={() => setScreen('Home')} />}
      <BottomNav active={screen} onNavigate={setScreen} />
    </div>
  );
}

export default App;