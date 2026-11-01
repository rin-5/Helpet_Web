import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { WipMessageAnnotatedComponent } from '../wip-message-annotated-component/wip-message-annotated-component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  imports: [RouterLink, MatIconModule, MatFabButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  goToUserProfile(): void {
    this.router.navigate(['/user']);
  }
  openSnackBarWip() {
    this._snackBar.openFromComponent(WipMessageAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
