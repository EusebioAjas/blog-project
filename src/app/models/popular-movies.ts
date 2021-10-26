export interface PopularMovies {
  "results": Array<{
    "id": number,
    "genre_ids": Array<{ "id": number }>,
    "relase_date": String,
    "title": String,
    "overview": String,
    "vote_average": number,
    "poster_path": string,
    "backdrop_path": string
  }>
}
