import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css';
import { faHome } from '@fortawesome/free-solid-svg-icons';

function Sidebar({ navbarToggleClick }: any) {
  return (
    <div className={`navigation ${navbarToggleClick ? 'active-container' : ''}`}>
      <ul>
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="title">Dashboard</span>
          </a>
        </li>
        <li className="active">
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="title">Bill Management</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="title">Sauda book</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="icon">
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span className="title">Reports</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
