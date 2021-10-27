import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { MovieCardComponent } from "./movie-card/movie-card.component";
import { PaginationButtonsComponent } from './pagination-buttons/pagination-buttons.component';
import { NgbdRatingBasic } from "./rating/rating-container";

export const components: any[] = [
  FooterComponent,
  NavbarComponent,
  MovieCardComponent,
  PaginationButtonsComponent,
  NgbdRatingBasic,
]


export * from './footer/footer.component'
export * from './navbar/navbar.component'
export * from './movie-card/movie-card.component'
export * from './pagination-buttons/pagination-buttons.component'
export * from './rating/rating-container'
