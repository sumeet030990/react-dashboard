import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCoins, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';
import { NAVBAR_MODES } from '../../utils/constants';

type SidebarProps = {
  navbarMode: number;
  userName: String;
};
function Sidebar({ navbarMode, userName }: SidebarProps) {
  return (
    <div className="sidebar-container">
      <div className={`profile-section ${NAVBAR_MODES[navbarMode]}`}>
        <div>
          <img
            src={require('../../assests/images/profile_images/profile_pic.jpg')}
            alt="profile pic"
            className={`profile-image ${NAVBAR_MODES[navbarMode]}`}
          />
        </div>
        <div className="profile-details">
          <p>{userName}</p>
          <p>Edit Profile</p>
        </div>
      </div>
      <ul className={`nav-links-ul ${NAVBAR_MODES[navbarMode]}`}>
        <li>
          <FontAwesomeIcon icon={faHouse} />
          <Link to={''}>Dashboard</Link>
          <span className="tooltip-menu">Dashboard</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faBook} />
          <Link to={''}>Sauda Book</Link>
          <span className="tooltip-menu">Sauda Book</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCoins} />
          <Link to={''}>Bills</Link>
          <span className="tooltip-menu">Bills</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faUsers} />
          <Link to={'/users'}>Users</Link>
          <span className="tooltip-menu">Users</span>
        </li>
      </ul>
    </div>
  );
}

Sidebar.defaultProps = {
  navbarMode: 0,
  userName: '',
};
export default Sidebar;
