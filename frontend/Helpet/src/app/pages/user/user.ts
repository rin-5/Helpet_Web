import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatFabButton } from '@angular/material/button';

@Component({
  imports: [MatFabButton],
  selector: 'app-user',
  styleUrl: './user.css',
  templateUrl: './user.html',
})
export class User {
  private service = inject(AuthService);
  private snackBar = inject(MatSnackBar);
  private router = inject(Router);

  openSnackBar(message: string): void {
    let config = new MatSnackBarConfig();
    config.duration = 6000;
    this.snackBar.open(message, '', config);
  }
  goHome(): void {
    this.router.navigate(['/home']).then();
  }

  logout(): void {
    this.service.logout();
    console.log('Log-out successful!\n ');
    this.openSnackBar('Log-out successful! Redirecting to the home page...');
    this.service.isSignedIn.set(false);
    this.goHome();
  }
}
