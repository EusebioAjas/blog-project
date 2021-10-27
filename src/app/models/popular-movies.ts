import { Movie } from './movie';
export interface PopularMovies {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
