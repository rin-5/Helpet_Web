import { inject, Service, signal } from '@angular/core';
import { Article } from '../../models/Article';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ArticleDetailed } from '../../pages/articles/article-detailed/article-detailed';


@Service()
export class ArticleService {
  private readonly API_BASE_URL = 'http://localhost:8080/api';
  private readonly ARTICLE_ENDPOINT = 'articles';

  private http: HttpClient = inject(HttpClient);
  loadArticlePage(
    filterParams: string,
    page: number,
    size: number,
  ): Observable<{ list: Article[]; total: number }> {
    const params = new HttpParams()
      .set('searchTerm', filterParams)
      .set('page', page.toString())
      .set('size', size.toString());

    return this.http
      .get<Record<string, any>>(`${this.API_BASE_URL}/${this.ARTICLE_ENDPOINT}`, {
        params,
        withCredentials: true,
      })
      .pipe(
        map((response) => ({
          list: (response?.['content'] as Article[]) ?? [],
          total: (response?.['totalElements'] as number) ?? 0,
        })),
      );
  }

  getById(id: number): Observable<Article> {
    return this.http.get<Article>(`${this.API_BASE_URL}/${this.ARTICLE_ENDPOINT}/` + id);
  }
  private mockupArticleData = signal<Article[]>([
    {
      id: 0,
      author: 'someAuthor',
      title: 'Post With Image Mockup',
      category: 'Cats',
      text:
        'This is a mockup article. It will probably be replaced with real data someday.\n Anyways, as I was saying. ' +
        'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor. ' +
        "Oh, by the by. Did you know cats are so stinking cute?? They're so adorable I could get diabetes just by looking at them",
      imageUrl: './assets/card_test.png',
    },
    {
      id: 1,
      author: 'someAuthor2',
      title: 'Post Without Image Mockup',
      category: 'Dogs',
      text:
        "This is my super cool post. It's super cool, right? Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor." +
        "Oh, by the by. Did you know cats are so stinking cute?? They\\'re so adorable I could get diabetes just by looking at them",
    },
    {
      id: 2,
      author: 'someAuthor3',
      title: 'Post With Image Mockup 2',
      category: 'Birds',
      text: "This is an article similar to the first one. Pigeons like showers with a soft water mist. Make sure to shower them every once in a while, specially when it's hot outside.",
      imageUrl: './assets/card_test.png',
    },
  ]);
  getArticleById(id: number) {
    return this.mockupArticleData().find((article) => article.id === id);
  }

  getArticles() {
    return this.mockupArticleData();
  }
}
