import { Component, computed, inject, signal } from '@angular/core';
import { ArticleCard } from '../../components/article-card/article-card';
import { RouterLink } from '@angular/router';
import { ArticleService } from '../../services/article-service/article-service';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatButton } from '@angular/material/button';


@Component({
  imports: [ArticleCard, MatLabel, MatFormField, MatButton, MatInput, MatPaginator],
  selector: 'app-articles',
  styleUrl: './articles.css',
  templateUrl: './articles.html',
})
export class Articles {
  public filterValue = signal<string>('');
  public pageIndex = signal<number>(0);
  public pageSize = signal<number>(20);

  articleResource = rxResource({
    params: () => ({
      filterParams: this.filterValue(),
      page: this.pageIndex(),
      size: this.pageSize(),
    }),
    stream: ({ params }) =>
      this.articleService.loadArticlePage(params.filterParams, params.page, params.size),
  });

  public paginatedArticleList = computed(() => {
    return this.articleResource.value()?.list ?? [];
  });

  totalElements = computed(() => {
    return this.articleResource.value()?.total ?? 0;
  });
  articleService = inject(ArticleService);

  ngOnInit() {
    this.articleResource.reload();
  }

  setFilter(filter: string) {
    this.pageIndex.set(0);
    this.filterValue.set(filter);
    this.articleResource.reload();
  }
  resetFilters(): void {
    this.filterValue.set('');
    this.articleResource.reload();
  }

  onPageChange = (event: PageEvent): void => {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  };
}
