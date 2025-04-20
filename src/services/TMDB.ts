import { GenreOrCategoryState } from "@/currentGenreOrCategory";
import {
  MovieListsGenresResponse,
  MovieListsPopularQueryParams,
  MovieListsPopularResponse,
} from "@/types/tmdbApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiToken = import.meta.env.VITE_TMDB_TOKEN;

const defaultParams: {
  popular: MovieListsPopularQueryParams;
  genres: { language: string };
} = {
  popular: {
    language: "en-US",
    page: 1,
  },
  genres: {
    language: "en-US",
  },
};

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${tmdbApiToken}`);
    },
  }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query<MovieListsGenresResponse, void>({
      query: () => {
        const { language } = defaultParams.genres;
        return `genre/movie/list?language=${language}`;
      },
    }),

    //* Get Movies by [type]
    getMovies: builder.query<MovieListsPopularResponse, GenreOrCategoryState>({
      query: ({ genreIdOrCategoryName, page, searchQuery }) => {
        const { language } = defaultParams.popular;
        //* Get Movie by Search
        if (searchQuery) {
          return `search/movie?query=${searchQuery}&language=${language}&page=${page}`;
        }

        //* Get Movies by Category
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "string"
        ) {
          return `movie/${genreIdOrCategoryName}?language=${language}&page=${page}`;
        }

        //* Get Movies by Genre
        if (
          genreIdOrCategoryName &&
          typeof genreIdOrCategoryName === "number"
        ) {
          return `discover/movie?with_genres=${genreIdOrCategoryName}&language=${language}&page=${page}`;
        }

        //* Get Popular Movies
        return `movie/popular?language=${language}&page=${page}`;
      },
    }),
  }),
});

export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
