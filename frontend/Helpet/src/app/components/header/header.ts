import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';

@Component({
  imports: [RouterLink, MatIconModule, MatFabButton],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  router = inject(Router);
  goToUserProfile(): void {
    this.router.navigate(['/user']);
  }
}
