import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={s.AppBar}>
      <ul className={s.Nav}>
        <li>
          <NavLink exact to="/" className={s.NavLink} activeClassName={s.NavLinkActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies" className={s.NavLink} activeClassName={s.NavLinkActive}>
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default AppBar;