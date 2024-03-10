import { useState } from 'react';
import './learn.css';

function Learn() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navigation">Navigation</div>
      <div className="container-section">
        <aside className={`sidebar ${toggle ? 'narrow-sidebar' : ''}`}>Aside Nav</aside>
        <div className={`content ${toggle ? 'narrow-sidebar' : ''}`}>
          Content<button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
      </div>
      <div className="footer">Footer</div>
    </>
  );
}

export default Learn;
