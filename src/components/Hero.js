
import React from "react";
import {
  HeroButton,
  HeroContainer,
  HeroDescription,
  HeroTitle,
} from "./Hero.styles";

function Hero({ movies }) {
  if (!movies) return <h1>LOADING</h1>;
  const movie = movies.results[Math.floor(Math.random() * movies.results.length)];
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
