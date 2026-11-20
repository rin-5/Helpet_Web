import { Component, computed, effect, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post-service/post-service';
import { Post } from '../../../models/Post';
import { ArticleService } from '../../../services/article-service/article-service';
import { Article } from '../../../models/Article';

@Component({
  imports: [],
  selector: 'app-article-detailed',
  styleUrl: './article-detailed.css',
  templateUrl: './article-detailed.html',
})
export class ArticleDetailed {
  private router = inject(Router);
  private articleService = inject(ArticleService);

  id = input<string>();

  article = computed<Article | undefined>(() => {
    const currentId = this.id();

    if (currentId === undefined || currentId === '') return undefined;
    const idNumeric = Number(currentId);

    return this.articleService.getArticleById(idNumeric);
  });

  constructor() {
    effect(() => {
      const currentId = this.id();
      const currentArticle = this.article();

      if (currentId !== undefined && currentId !== '') {
        if (currentArticle === undefined) {
          console.log("The post wasn't found.");
          this.router.navigate(['/notfound']);
        }
      }
    });
  }
}
