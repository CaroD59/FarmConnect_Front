import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './styles';

function Header() {
  return (
    <StyledHeader>
      <nav className="NavBar">
        <div className="LogoContainer">
          <a href="/">
            <img src="/img/header-logo.jpg" alt="logo" />
          </a>
        </div>
        <div className="container">
          <div className="Pages">
            <ul>
              <li className="Cockpit">
                <NavLink to="/cockpit">Cockpit</NavLink>
              </li>
              <li className="MyApps">
                <NavLink to="/myapps">Mes Services</NavLink>
              </li>
              <li className="Marketplace">
                <NavLink to="/apps">Marketplace</NavLink>
              </li>
              <li className="Contact">
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="logoProfile">
            <a href="/myprofile">
              <img src="/img/Vector.png" alt="logoProfile" />
            </a>
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}

export default Header;
