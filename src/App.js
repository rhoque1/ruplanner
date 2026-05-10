import './App.css';
import { useState } from 'react';
import Home from './Home';
import AI from './AI';
import Schedule from './Schedule';
import Progress from './Progress';
import StudySpots from './StudySpots';
import BottomNav from './BottomNav';
import Profile from './Profile';

function App() {
  const [screen, setScreen] = useState('Home');

  return (
    <div className="phone">
      {screen === 'Home' && <Home onNavigate={setScreen} />}
      {screen === 'AI' && <AI />}
      {screen === 'Schedule' && <Schedule onNavigate={setScreen} />}
      {screen === 'Progress' && <Progress />}
      {screen === 'StudySpots' && <StudySpots onBack={() => setScreen('Home')} />}
      {screen === 'Profile' && <Profile />}
      <BottomNav active={screen} onNavigate={setScreen} />
    </div>
  );
}

export default App;