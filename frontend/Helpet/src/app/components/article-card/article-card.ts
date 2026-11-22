import { Component, input } from '@angular/core';
import { MatCard, MatCardAvatar, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  imports: [
    MatCard,
    MatCardAvatar,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    RouterLink,
  ],
  selector: 'app-article-card',
  styleUrl: './article-card.css',
  templateUrl: './article-card.html',
})
export class ArticleCard {
  id = input.required<number>();
  author = input<string>('This is a default placeholder text. You should not be seeing this.');
  title = input.required<string>();
  category = input.required<'Dogs' | 'Cats' | 'Birds' | 'Lizards' | 'Rodent'>();
  description = input<string>(
    'This is a placeholder description text for a post. You should not be seeing this.',
  );
  imageUrl = input<string | undefined>();
}
