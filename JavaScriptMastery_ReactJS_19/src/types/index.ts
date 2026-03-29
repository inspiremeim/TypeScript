import type { Models } from "appwrite";

export type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  release_date: string;
  original_language: string;
};

export interface TMDBResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
  Response?: string;
  Error?: string;
}

export interface TrendingMovie extends Models.DefaultRow {
  searchTerm: string;
  count: number;
  poster_url: string;
  movie_id: number;
  title?: string;
}

export interface ApiOptions {
  method: string;
  headers: {
    Authorization: string;
    accept: string;
  };
}
