import React, { Component } from 'react';
import CastMovieAPI from '../../services/CastMovieAPI';
import s from './Cast.module.css';

class Cast extends Component {
  state = {
    cast: null,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    CastMovieAPI(movieId).then(data => this.setState({ cast: data.cast.slice(0, 6) }));
  }

  render() {
    const { cast } = this.state;

    return (
      <>
        <ul className={s.list}>
          {cast &&
            cast.map(cas => {
              let url;
              if (cas.profile_path) {
                url = `https://image.tmdb.org/t/p/w300${cas.profile_path}`;
              } else {
                url = 'https://invitro-bulvar.infoorel.ru/images/inc/noavatar.jpg';
              }

              return (
                <li key={cas.cast_id} className={s.item}>
                  <img src={url} alt={cas.name} className={s.img} />
                  <p>{cas.name}</p>
                  <p>Character:</p>
                  <p>{cas.character}</p>
                </li>
              );
            })}
        </ul>
      </>
    );
  }
}
export default Cast;