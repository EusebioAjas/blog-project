import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { YtbVideoFrameComponent } from './components/ytb-video-frame/ytb-video-frame.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: '', component: PopularMoviesComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'search', component: YtbVideoFrameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
