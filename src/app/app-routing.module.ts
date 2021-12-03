import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages';
import { NewsPageComponent } from './pages/news-page/news-page.component';

const routes: Routes = [
  {
    path: 'private',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'detail/:id', component: MovieDetailComponent },
  { path: 'news', component: NewsPageComponent },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
