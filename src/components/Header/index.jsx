import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './styles';

function Header() {
  return (
    <StyledHeader>
      <nav className="NavBar">
        <div className="LogoContainer">
          <a href="http://localhost:3000/home">
            <img src="/img/header-logo.jpg" alt="logo" />
          </a>
        </div>
        <div className="Pages">
          <ul>
            <li className="Home">
              <NavLink to="/home">Home</NavLink>
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
      </nav>
    </StyledHeader>
  );
}

export default Header;
