import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCardComponent, NavbarComponent } from './shared/components';
import { MovieCardDirective, NavbarDirective } from './shared/directives';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { YtbVideoFrameComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDirective,
    MovieCardDirective,
    MovieCardComponent,
    YtbVideoFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NavbarComponent,
    NavbarDirective,
    MovieCardDirective,
    MovieCardComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
