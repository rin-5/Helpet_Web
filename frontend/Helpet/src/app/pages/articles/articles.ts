import { Component } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { RouterLink } from '@angular/router';

@Component({
  imports: [ArticleCard, RouterLink],
  selector: 'app-articles',
  styleUrl: './articles.css',
  templateUrl: './articles.html',
})
export class Articles {}
