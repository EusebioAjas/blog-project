import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'comments/:id',
    component: CommentDetailComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule {}
