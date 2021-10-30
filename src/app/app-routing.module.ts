import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { YtbVideoFrameComponent } from './components/ytb-video-frame/ytb-video-frame.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';

const routes: Routes = [
  { path: '', component: PopularMoviesComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'search', component: YtbVideoFrameComponent },
  { path: 'noticias', component: NewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
