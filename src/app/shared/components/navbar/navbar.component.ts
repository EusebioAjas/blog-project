import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logOut();
  }
}
