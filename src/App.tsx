import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { NAVBAR_MODES } from './utils/constants';
import { isMobile } from 'react-device-detect';
// https://www.youtube.com/watch?v=wEfaoAa99XY&t=112s&ab_channel=CodingLab
// https://www.youtube.com/watch?v=ES8vJcUqE7s&ab_channel=CodingLab
function App() {
  const [navbarMode, setNavbarMode] = useState(isMobile ? 2 : 0);
  console.log('navbarMode: ', navbarMode);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar setNavbarMode={setNavbarMode} />
        <div className="main-section">
          <Sidebar navbarMode={navbarMode} />
          <div className={`main-container ${NAVBAR_MODES[navbarMode]}`}>
            <div className={`container ${NAVBAR_MODES[navbarMode]}`}>
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
