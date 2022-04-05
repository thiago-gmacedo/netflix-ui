import { MoviesContainer, MoviesTitle, MoviesRow, MoviesPoster } from "./Movies.styles";
import PropTypes from "prop-types";
import React from "react";

const Movies = ({ movies, title }) => {
  if (!movies) return <h1>LOADING</h1>;
  return (
    <MoviesContainer>
      <MoviesTitle>{title}</MoviesTitle>
      <MoviesRow>
        {movies.results.map((movie) => (
          <MoviesPoster
            key={movie.id}
            alt={movie.title}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        ))}
      </MoviesRow>
    </MoviesContainer>
  );
}

export default Movies;

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  movies: PropTypes.Shape({
    page: PropTypes.number.isRequired,
    total_results: PropTypes.number.isRequired,
    total_pages: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(
      PropTypes.Shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
      })
    ).isRequired,
  })
};