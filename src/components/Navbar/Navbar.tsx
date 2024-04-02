import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';
import { Button } from 'react-bootstrap';

type NavbarProps = {
  companyName: String;
  setNavbarMode: React.Dispatch<React.SetStateAction<number>>;
};
function Navbar({ companyName, setNavbarMode }: NavbarProps) {
  const handleNavbarToggleClick = () => {
    if (isMobile) {
      // in mobile view we are not going to show the minimizied version of navbar
      setNavbarMode((oldState: number) => {
        const result: number = ++oldState % 3;
        if (result === 1) {
          return result + 1;
        } else {
          return result;
        }
      });
    } else {
      setNavbarMode((oldState: number) => ++oldState % 3);
    }
  };
  return (
    <nav className="navbar-container">
      <span className="navbar-left-container">
        <FontAwesomeIcon icon={faBars} onClick={handleNavbarToggleClick} data-testid="navbar-icon" />
        <div className="company-name">
          <span className="navbar-right-container">{companyName}</span>
        </div>
      </span>
      <span className="navbar-right-container">
        <div className="logout">
          <Button variant="outline-danger" size="sm">
            <FontAwesomeIcon icon={faPowerOff} />
          </Button>
        </div>
      </span>
    </nav>
  );
}

Navbar.defaultProps = {
  companyName: '',
};
export default Navbar;
