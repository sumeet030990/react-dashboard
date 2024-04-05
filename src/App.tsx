import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import { NAVBAR_MODES } from './utils/constants';
import { isMobile } from 'react-device-detect';
import ListAllUsers from './components/Users/ListAllUsers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// https://www.youtube.com/watch?v=wEfaoAa99XY&t=112s&ab_channel=CodingLab
// https://www.youtube.com/watch?v=ES8vJcUqE7s&ab_channel=CodingLab
function App() {
  const [navbarMode, setNavbarMode] = useState(isMobile ? 2 : 0);
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar companyName={'Company Name'} setNavbarMode={setNavbarMode} />
        <div className="main-section">
          <Sidebar navbarMode={navbarMode} userName={'Sumeet Jadhav'} />
          <div className={`main-container ${NAVBAR_MODES[navbarMode]}`}>
            <div className={`container ${NAVBAR_MODES[navbarMode]}`}>
              <QueryClientProvider client={queryClient}>
                <Routes>
                  <Route path="/" element={<Dashboard />}></Route>
                  <Route path="/users" element={<ListAllUsers />}></Route>
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
