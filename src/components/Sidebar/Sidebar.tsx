import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { NAVBAR_MODES } from '../../utils/constants';

type SidebarProps = {
  navbarMode: number;
};
function Sidebar({ navbarMode }: SidebarProps) {
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
          <p>Sumeet Jadhav</p>
          <p>Edit Profile</p>
        </div>
      </div>
      <ul className="nav-links-ul">
        <li>
          <FontAwesomeIcon icon={faLayerGroup} />
          <Link to={''}>Dashboard</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faLayerGroup} />
          <Link to={''}>Sauda Book</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faLayerGroup} />
          <Link to={''}>Bills</Link>
        </li>
        <li>
          <FontAwesomeIcon icon={faLayerGroup} />
          <Link to={''}>Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
