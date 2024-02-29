import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
// https://www.youtube.com/watch?v=nUUsUAPEjFc&ab_channel=OnlineTutorials
function App() {
  const [navbarToggleClick, setNavbarToggleClick] = useState(false);
  return (
    <div className="App">
      <Navbar navbarToggleClick={navbarToggleClick} setNavbarToggleClick={setNavbarToggleClick} />
      <div>
        <Sidebar navbarToggleClick={navbarToggleClick} />
      </div>
    </div>
  );
}

export default App;