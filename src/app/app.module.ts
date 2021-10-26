import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YouTubeVideoService } from './services';
import { YtbVideoFrameComponent } from './components';
import { MovieCardComponent, NavbarComponent, NgbdRatingBasic, PaginationButtonsComponent } from './shared/components';
import { MovieCardDirective, NavbarDirective } from './shared/directives';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDirective,
    MovieCardDirective,
    MovieCardComponent,
    YtbVideoFrameComponent,
    NgbdRatingBasic,
    PaginationButtonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    NavbarComponent,
    PaginationButtonsComponent,
    NavbarDirective,
    MovieCardDirective,
    MovieCardComponent,
    YouTubeVideoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
