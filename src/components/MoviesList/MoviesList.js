import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import s from './MoviesList.module.css';

function MoviesList({ options, location }) {
   
  return (
    <ul className={s.list}>
      {options.map(({ id, title, poster_path }) => (
          <li key={id}>
          <div className={s.card}>
            <div className={s.preview}><img src={poster_path ? `https://image.tmdb.org/t/p/w200${poster_path}` :
            "http://dummyimage.com/200x300/99cccc.gif&text=No+picture"} alt={title} /> </div>
          <NavLink
            to={{
              pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            {title}
          </NavLink></div>
        </li>
      ))}
    </ul>
  );
}
export default withRouter(MoviesList);