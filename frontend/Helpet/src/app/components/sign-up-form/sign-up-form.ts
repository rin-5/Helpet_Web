import { Component, inject, signal } from '@angular/core';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth-service';
import { MatIcon } from '@angular/material/icon';

@Component({
  imports: [
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatIconButton,
    MatButton,
    RouterLink,
    MatIcon,
    MatError,
  ],
  selector: 'app-sign-up-form',
  styleUrl: './sign-up-form.css',
  templateUrl: './sign-up-form.html',
  standalone: true,
})
export class SignUpForm {
  txtErrorName = signal('');
  txtErrorMail = signal('');
  txtErrorUsername = signal('');
  txtErrorPassword = signal('');

  private service = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  userAuthRegisterForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    mail: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    pwd: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(8)],
    })
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
    this.router.navigate(['/home']);
  }

  onSubmit(): void {
    if (this.userAuthRegisterForm.valid) {
      this.service.register(this.userAuthRegisterForm.value).subscribe({
        next: (response) => {
          console.log('Account registered successfully!');
          this.openSnackBar('Account registered successfully! Redirecting to the View page...');
          this.service.isSignedIn.set(true);
          this.goHome();
        },
        error: (error) => {
          console.error('Registration error: ', error);
          this.openSnackBar(
            "We weren't able to create your account. Please check the credentials and try again.",
          );
        },
      });
    }
  }
}
