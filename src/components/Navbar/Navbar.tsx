import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar.css';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { isMobile } from 'react-device-detect';

type NavbarProps = {
  setNavbarMode: React.Dispatch<React.SetStateAction<number>>;
};
function Navbar({ setNavbarMode }: NavbarProps) {
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
        <FontAwesomeIcon icon={faBars} onClick={handleNavbarToggleClick} />
        <div className="company-name">
          <span className="navbar-right-container">Company Name</span>
        </div>
      </span>
      <span className="navbar-right-container">right</span>
    </nav>
  );
}

export default Navbar;
