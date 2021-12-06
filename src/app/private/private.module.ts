import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CommentDetailComponent } from './components/comment-detail/comment-detail.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/user-list/user-list.component';
@NgModule({
  declarations: [DashboardComponent, CommentDetailComponent, UserListComponent],
  imports: [CommonModule, PrivateRoutingModule, FormsModule],
})
export class PrivateModule {}
