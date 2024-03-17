import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ navbarToggleClick }: any) {
  return (
    <div className="sidebar-container">
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
