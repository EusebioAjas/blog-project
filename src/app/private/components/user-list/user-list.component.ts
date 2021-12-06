import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users!: User[];
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.authService
      .getUsers()
      .pipe(tap(() => this.router.onSameUrlNavigation = "reload"))
      .subscribe((response) => {
        this.users = response;
      });
  }

  delete(email: string) {
    this.authService
      .deleteUser(email)
      .pipe(tap(() => this.router.onSameUrlNavigation = "reload"))
      .subscribe((response) => {
        this.getAllUsers();
      });
  }
}
