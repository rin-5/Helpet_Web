import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.css',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  isDarkMode$: Observable<boolean>;

  constructor(private themeService: ThemeToggle) {
    this.isDarkMode$ = this.themeService.isDarkMode$;
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
}
