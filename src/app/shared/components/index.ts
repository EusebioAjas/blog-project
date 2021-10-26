import { MovieCardComponent } from "./movie-card/movie-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { PaginationButtonsComponent } from './pagination-buttons/pagination-buttons.component';
import { NgbdRatingBasic } from "./rating/rating-container";

export const components: any[] = [
  MovieCardComponent,
  NavbarComponent,
  PaginationButtonsComponent,
  NgbdRatingBasic,
]

export * from './movie-card/movie-card.component'
export * from './navbar/navbar.component'
export * from './pagination-buttons/pagination-buttons.component'
export * from './rating/rating-container'
