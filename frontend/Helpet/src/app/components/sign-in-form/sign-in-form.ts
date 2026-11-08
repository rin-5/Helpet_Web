import { Component, inject, signal } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  imports: [
    MatFormField,
    MatLabel,
    MatIcon,
    RouterLink,
    MatButton,
    ReactiveFormsModule,
    MatIconButton,
    MatInput,
  ],
  selector: 'app-sign-in-form',
  styleUrl: './sign-in-form.css',
  templateUrl: './sign-in-form.html',
})
export class SignInForm {
  private service = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  userAuthLoginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    }),
  });

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  openSnackBar(message: string): void {
    let config = new MatSnackBarConfig();
    config.duration = 6000;
    this.snackBar.open(message, '', config);
  }
  goHome(): void {
    this.router.navigate(['/home']).then();
  }

  onSubmit(): void {
    if (this.userAuthLoginForm.valid) {
      this.service.signIn(this.userAuthLoginForm.value).subscribe({
        next: (response) => {
          console.log('Log-in successful!\n ' + response);
          this.openSnackBar('Log-in successful! Redirecting to the View page...');
          this.goHome();
        },
        error: (error) => {
          console.error(error);
          this.openSnackBar('Log-in unsuccessful! Please check your  and try again.');
        },
      });
    }
  }
}
