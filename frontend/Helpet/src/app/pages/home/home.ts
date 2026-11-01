import { Component, inject } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { Router } from '@angular/router';
import { MatFabButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  WipMessageAnnotatedComponent
} from '../../components/wip-message-annotated-component/wip-message-annotated-component';

@Component({
  selector: 'app-home',
  imports: [ArticleCard, MatFabButton],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private router = inject(Router);
  private _snackBar = inject(MatSnackBar);

  durationInSeconds = 5;

  openSnackBarWip() {
    this._snackBar.openFromComponent(WipMessageAnnotatedComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  goToArticleView(): void {
    this.router.navigate(['/articles/view']);
  }
}


