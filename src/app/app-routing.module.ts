import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtbVideoFrameComponent } from './components/ytb-video-frame/ytb-video-frame.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HomeComponent } from './pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'search', component: YtbVideoFrameComponent },
  { path: 'noticias', component: NewsletterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
