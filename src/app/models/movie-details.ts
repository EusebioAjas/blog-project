export interface MovieDetails {
  "id": number,
  "title": string,
  "overview": string,
  "vote_average": string,
  "poster_path": string,
  "relase_date": string,
  "runtime": number,
  "status": string,
  "genres": Array<{
    "id": number,
    "name": string
  }>
}
