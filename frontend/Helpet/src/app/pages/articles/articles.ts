import { Component } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';

@Component({
  imports: [ArticleCard],
  selector: 'app-articles',
  styleUrl: './articles.css',
  templateUrl: './articles.html',
})
export class Articles {}
