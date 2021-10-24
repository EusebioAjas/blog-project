import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCardComponent, NavbarComponent } from './shared/components';
import { MovieCardDirective, NavbarDirective } from './shared/directives';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDirective,
    MovieCardDirective,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [NavbarComponent, NavbarDirective, MovieCardDirective, MovieCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
