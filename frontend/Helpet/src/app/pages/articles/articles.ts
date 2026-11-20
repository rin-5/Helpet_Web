import { Component, inject } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article-service/article-service';
import { mock } from 'node:test';

@Component({
  imports: [ArticleCard, RouterLink],
  selector: 'app-articles',
  styleUrl: './articles.css',
  templateUrl: './articles.html',
})
export class Articles {
  articleService = inject(ArticleService);

  get mockupArticleData() {
    return this.articleService.getArticles()
  }

  protected readonly mock = mock;
}
