import {
  MovieListsPopularQueryParams,
  MovieListsPopularResponse,
} from "@/types/tmdbApi";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tmdbApiToken = import.meta.env.VITE_TMDB_TOKEN;

const defaultParams: { popular: MovieListsPopularQueryParams } = {
  popular: {
    language: "en-US",
    page: 1,
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
    // * Get Movies by [type]
    getMovies: builder.query<MovieListsPopularResponse, void>({
      query: () => {
        const { language, page } = defaultParams.popular;
        return `movie/popular?language=${language}&page=${page}`;
      },
    }),
  }),
});

export const { useGetMoviesQuery } = tmdbApi;
