import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeVideoService } from './services';
import { YtbVideoFrameComponent } from './components';
import { FooterComponent, MovieCardComponent, NavbarComponent, NgbdRatingBasic, PaginationButtonsComponent } from './shared/components';
import { MovieCardDirective, NavbarDirective } from './shared/directives';
import { TMDBDataService } from './services/tmdb-data.service';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDirective,
    MovieCardDirective,
    MovieCardComponent,
    YtbVideoFrameComponent,
    NgbdRatingBasic,
    FooterComponent,
    PaginationButtonsComponent,
    PopularMoviesComponent,
    MovieDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    NavbarDirective,
    MovieCardDirective,
    YouTubeVideoService,
    TMDBDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
