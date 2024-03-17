import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
// https://www.youtube.com/watch?v=wEfaoAa99XY&t=112s&ab_channel=CodingLab
// https://www.youtube.com/watch?v=ES8vJcUqE7s&ab_channel=CodingLab
function App() {
  const [navbarToggleClick, setNavbarToggleClick] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar navbarToggleClick={navbarToggleClick} setNavbarToggleClick={setNavbarToggleClick} />
        <div className="main-section">
          <Sidebar navbarToggleClick={navbarToggleClick} />
          <div className={`main-container ${navbarToggleClick ? 'minimized-navbar' : ''}`}>
            <div className="container">
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
