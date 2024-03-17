import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar({ navbarToggleClick, setNavbarToggleClick }: any) {
  return (
    <nav className="navbar-container">
      <span className="navbar-left-container">
        <FontAwesomeIcon icon={faBars} />
        <div className="company-name">
          <span className="navbar-right-container">Company Name</span>
        </div>
      </span>
      <span className="navbar-right-container">right</span>
    </nav>
  );
}

export default Navbar;
