interface MovieListsPopularResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieListsPopularResponse {
  page: number;
  results: MovieListsPopularResult[];
  total_pages: number;
  total_results: number;
}

export interface MovieListsPopularQueryParams {
  language?: string; // Defaults to "en-US"
  page?: number; // Defaults to 1
  region?: string; // ISO-3166-1 code
}
