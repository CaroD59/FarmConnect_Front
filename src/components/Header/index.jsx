import React from 'react';
import { NavLink } from 'react-router-dom';
import StyledHeader from './styles';

function Header() {
  const handleClick = true;
  const burger = true;
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
            <NavLink to="/myprofile">
              <img src="/img/Vector.png" alt="logoProfile" />
            </NavLink>
          </div>
        </div>
        <button type="button" className="btn-navigation" onClick={handleClick}>
          <div className="barre" />
          <div className="barre" />
          <div className="barre" />
        </button>
      </nav>
      <div className={burger ? 'burger' : 'burger1'}>
        <div className="pages">
          <ul>
            <li className="Cockpit">
              <NavLink to="/cockpit">
                <p>Cockpit</p>
              </NavLink>
            </li>
            <li className="MyApps">
              <NavLink to="/myapps">
                <p>Mes Services</p>
              </NavLink>
            </li>
            <li className="Marketplace">
              <NavLink to="/apps">
                <p>Marketplace</p>
              </NavLink>
            </li>
            <li className="Contact">
              <NavLink to="/contact">
                <p>Contact</p>
              </NavLink>
            </li>
          </ul>
          <div className="logoProfile">
            <NavLink to="/myprofile">
              <img src="/img/Vector.png" alt="logoProfile" />
            </NavLink>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
