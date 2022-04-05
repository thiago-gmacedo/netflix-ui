import { MoviesContainer, MoviesTitle, MoviesRow, MoviesPoster } from "./Movies.styles";

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
