import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomValidators } from '../../_helpers/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  passwordPattern: string = '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  registerForm: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.passwordPattern),
      ]),
      confirmPassword: new FormControl(null, [Validators.required]),
    },
    {
      validators: CustomValidators.passwordsMatching,
    }
  );

  register(): void {
    if (this.registerForm.valid) {
      this.authService
        .registerUser({
          username: this.username.value,
          email: this.email.value,
          password: this.password.value,
        })
        .pipe(tap(() => this.router.navigate(['../login'])))
        .subscribe();
    }
    this.registerForm.reset();
  }

  get username(): FormControl {
    return this.registerForm.get('username') as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.get('email') as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.get('password') as FormControl;
  }

  get confirmPassword(): FormControl {
    return this.registerForm.get('confirmPassword') as FormControl;
  }
}
