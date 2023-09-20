import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
        <NavLink exact="true" to="/" className="active-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className="active-link">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="active-link">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
