export interface Movie {
  id: number;
  genre_ids: number[];
  release_date: String;
  title: String;
  overview: String;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
