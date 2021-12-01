import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeVideoService } from './services';
import { YtbVideoFrameComponent } from './components';
import {
  FooterComponent,
  MovieCardComponent,
  NavbarComponent,
  NgbdRatingBasic,
  PaginationButtonsComponent,
} from './shared/components';
import { MovieCardDirective, NavbarDirective } from './shared/directives';
import { TMDBDataService } from './services/tmdb-data.service';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppendBaseImgUrlPipe } from './shared/pipes/append-base-img-url.pipe';
import { DateRuntimePipe } from './shared/pipes/date-runtime.pipe';
import { RatingPipe } from './shared/pipes/rating.pipe';
import { HomeComponent } from './pages';
import { LatestRankedMoviesComponent } from './components/latest-ranked-movies/latest-ranked-movies.component';
import { MostRankedMoviesComponent } from './components/most-ranked-movies/most-ranked-movies.component';
import { MovieLittleCardComponent } from './shared/components/movie-little-card/movie-little-card.component';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';
import { QRCodeModule } from 'angular2-qrcode';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MovieCommentComponent } from './components/movie-comment/movie-comment.component';

export function tokenGetter() {
  return localStorage.getItem("access")
}
@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppComponent,
    HomeComponent,
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
    NewsletterComponent,
    AppendBaseImgUrlPipe,
    DateRuntimePipe,
    RatingPipe,
    LatestRankedMoviesComponent,
    MostRankedMoviesComponent,
    MovieLittleCardComponent,
    MovieReviewComponent,
    MovieCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QRCodeModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:3000']
      }
    }),
  ],
  providers: [YouTubeVideoService, TMDBDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
