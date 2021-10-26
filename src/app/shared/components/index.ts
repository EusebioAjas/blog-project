import { NavbarComponent } from "./navbar/navbar.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { NgbdRatingBasic } from "./rating/rating-container";

export const components: any[] = [
  NavbarComponent,
  MovieCardComponent,
  NgbdRatingBasic,
]

export * from './navbar/navbar.component'
export * from './movie-card/movie-card.component'
export * from './rating/rating-container'
