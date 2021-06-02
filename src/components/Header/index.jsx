import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/my-apps">Mes Services</NavLink>
            </li>
            <li>
              <NavLink to="/marketplace">Marketplace</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Router>
  );
}

export default Header;
