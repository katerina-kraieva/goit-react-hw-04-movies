import React, { Component } from 'react';
import ReviewsMovieAPI from '../../services/ReviewsMovieAPI';
import s from './Reviews.module.css';

class Reviews extends Component {
  state = {
    results: [],
    error: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;

    ReviewsMovieAPI(movieId).then(data => {
      if (data.results.length === 0) {
        return this.setState({
          massange: 'No Reviews',
          error: true,
        });
      }
      this.setState({ results: data.results.slice(0, 6) });
    });
  }

  render() {
    const { results, massange, error } = this.state;

    return (
      <>
        {!error && (
          <ul className={s.list}>
            {results.map(result => (
              <li key={result.id} className={s.item}>
                <p className={s.title}>Author: {result.author}</p>
                <p>{result.content}</p>
              </li>
            ))}
          </ul>
        )}
        {error && <p>{massange}</p>}
      </>
    );
  }
}
export default Reviews;