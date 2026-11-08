import { booleanAttribute, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { WipMessageAnnotatedComponent } from '../wip-message-annotated-component/wip-message-annotated-component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth-service';

@Component({
  imports: [RouterLink, MatIconModule, MatFabButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  router = inject(Router);
  private _snackBar = inject(MatSnackBar);
  service = inject(AuthService);
  durationInSeconds = 5;

  isSignedIn(): boolean {
    let signStatus:boolean = this.service.isSignedIn;
    return signStatus;
  }
  goToUserProfile(): void {
    this.router.navigate(['/user']);
  }
  goToSignIn(): void {
    this.router.navigate(['/sign-in']);
  }

  openSnackBarWip() {
    this._snackBar.openFromComponent(WipMessageAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
