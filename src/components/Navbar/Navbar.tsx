import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ navbarToggleClick, setNavbarToggleClick }: any) {
  return (
    <nav className="nav-container">
      <div className="left-side-container">
        <div className="toggle" onClick={() => setNavbarToggleClick(!navbarToggleClick)}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <span className="company-name">Company Name</span>
      </div>
      <div className="right-side-container">right</div>
    </nav>
  );
}

export default Navbar;
