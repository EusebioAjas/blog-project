import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtbVideoFrameComponent } from '../components';
import { MovieDetailComponent } from '../components/movie-detail/movie-detail.component';
import { NewsletterComponent } from '../components/newsletter/newsletter.component';
import { HomeComponent } from '../pages';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
