import { Component } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardHeader, MatCardImage, MatCardSubtitle, MatCardTitle } from '@angular/material/card';

@Component({
  imports: [
    MatCard,
    MatCardImage,
    MatCardAvatar,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,

  ],
  selector: 'app-article-card',
  styleUrl: './article-card.css',
  templateUrl: './article-card.html',
})
export class ArticleCard {}
