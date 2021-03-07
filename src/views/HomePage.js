import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';

import MoviesTopAPI from '../services/MoviesTopAPI';
import MoviesList from '../components/MoviesList';

class AuthorsView extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    MoviesTopAPI().then(data => this.setState({ results: data.results }));
  }

  render() {
    const { results } = this.state;

    return (
      <div className="container-fluid">
        <h2>Top Movies</h2>

        <MoviesList options={results} />
      </div>
    );
  }
}

export default AuthorsView;