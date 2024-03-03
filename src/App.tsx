import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
// https://www.youtube.com/watch?v=nUUsUAPEjFc&ab_channel=OnlineTutorials
function App() {
  const [navbarToggleClick, setNavbarToggleClick] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar navbarToggleClick={navbarToggleClick} setNavbarToggleClick={setNavbarToggleClick} />
        <div className="main-section">
          <div>
            <Sidebar navbarToggleClick={navbarToggleClick} />
          </div>
          <div className={`main-container ${navbarToggleClick ? 'minimized-navbar' : ''}`}>
            <div className="container m-2 full-height">
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
