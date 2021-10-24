import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YtbVideoFrameComponent } from './components/ytb-video-frame/ytb-video-frame.component';

const routes: Routes = [
  { path: 'search', component: YtbVideoFrameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
