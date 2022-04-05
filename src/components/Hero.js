import React from "react";
import PropTypes from "prop-types";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";

function Hero({ movies }) {
  if (!movies) return <h1>LOADING</h1>;
  const movie = movies
    .results[Math.floor(Math.random() * movies.results.length)];

  return (
    <HeroContainer background={movie?.backdrop_path}>
      <HeroTitle>{movie?.name}</HeroTitle>
      <HeroDescription>{movie?.overview}</HeroDescription>
      <HeroButton>Play</HeroButton>
      <HeroButton>My List</HeroButton>
    </HeroContainer>
  );
}

export default Hero;

Hero.propTypes = {
  movies: PropTypes.shape({
    page: PropTypes.number.isRequired,
    total_results: PropTypes.number.isRequired,
    total_pages: PropTypes.number.isRequired,
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        poster_path: PropTypes.string.isRequired,
        backdrop_path: PropTypes.string.isRequired,
      })
    ).isRequired,
  })
};
