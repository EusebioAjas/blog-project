import { Movie } from './movie';
export interface MovieResponse {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}
