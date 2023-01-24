import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import ErrorPage from './core/pages/error-page';
import HomePage from './features/movie/presentation/pages/home_page';
import { ThemeProvider } from '@mui/material';
import { MovieContainerImpl } from './main_container';
import { theme } from './theme';
import MoviePage from './features/movie/presentation/pages/movie_page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default class App extends React.Component {
  movieContainer = new MovieContainerImpl();
  router = createBrowserRouter([
    {
      path: "/",
      element:
        <HomePage di={this.movieContainer} />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/movie",
          element: <MoviePage di={this.movieContainer} />,
        },
      ],
    }
  ]);

  constructor(props: any) {
    super(props);
  }

  async componentDidMount() {

  }

  render() {
    return (
      // <ThemeProvider theme={theme}>
      //   <RouterProvider router={this.router} />
      // </ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage di={this.movieContainer}/>} />
          <Route path="/movie/:id" element={<MoviePage di={this.movieContainer}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }

}
