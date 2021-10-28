export interface Movie {
  id: number;
  genre_ids: number[];
  release_date: string;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
}
