import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AppBar from './components/AppBar/AppBar';
import NotFoundView from './views/NotFound';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */));

const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movies-details-page" */
  ),
);

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <AppBar />
        <Suspense fallback={<Loader type="Rings" color="#00BFFF" height={200} width={200} />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route path="/movies/:movieId" component={MovieDetailsPage} />

            <Route component={NotFoundView} />
          </Switch>
        </Suspense>

        <ToastContainer position="top-right" />
      </>
    );
  }
}

export default App;
