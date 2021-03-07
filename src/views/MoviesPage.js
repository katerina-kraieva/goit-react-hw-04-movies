import React, { Component } from 'react';

import { toast } from 'react-toastify';
import queryString from 'query-string';

import SearchMoviesAPI from '../services/SearchMoviesAPI';
import Searchbar from '../components/Searchbar';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    results: [],
    search: '',
    error: false,
  };
  componentDidMount() {
    const { search } = queryString.parse(this.props.location.search);

    if (search) {
      console.log('Есть квери, можно фечить');
      this.fetchShows(search);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { search: prevSearch } = queryString.parse(prevProps.location.search);
    const { search: nextSearch } = queryString.parse(this.props.location.search);
    console.log(prevSearch);
    console.log(nextSearch);

    if (prevSearch !== nextSearch) {
      this.fetchShows(nextSearch);
    }
  }

  fetchShows = search => {
    SearchMoviesAPI(search).then(data => {
      if (data.total_results === 0) {
        toast.error(`No results were found for ${search}`);
      }

      this.setState({ results: data.results });
    });
  };

  addSearch = query => {
    this.props.history.push({
      ...this.props.location,
      search: `search=${query}`,
    });
  };

  render() {
    const { results } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.addSearch} />

        {results && <MoviesList options={results} />}
      </>
    );
  }
}

export default MoviesPage;