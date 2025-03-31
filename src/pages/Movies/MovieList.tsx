import { MovieListsPopularResponse } from "@/types/tmdbApi";
import Movie from "./Movie";

const MovieList = ({ movies }: { movies: MovieListsPopularResponse }) => {
  return (
    <div className="flex grid-cols-12 flex-wrap justify-center overflow-auto pt-1 sm:justify-between md:grid">
      {movies.results.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
