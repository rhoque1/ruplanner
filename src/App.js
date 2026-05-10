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
  const [prevScreen, setPrevScreen] = useState('Home');

  const navigate = (to) => {
    setPrevScreen(screen);
    setScreen(to);
  };

  return (
    <div className="phone">
      {screen === 'Home' && <Home onNavigate={navigate} />}
      {screen === 'AI' && <AI />}
      {screen === 'Schedule' && <Schedule onNavigate={navigate} />}
      {screen === 'Progress' && <Progress />}
      {screen === 'StudySpots' && <StudySpots onBack={() => navigate(prevScreen)} />}
      {screen === 'Profile' && <Profile />}
      <BottomNav active={screen} onNavigate={navigate} />
    </div>
  );
}

export default App;