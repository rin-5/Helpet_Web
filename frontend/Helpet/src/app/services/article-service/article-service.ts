import { Service, signal } from '@angular/core';
import { Article } from '../../models/Article';


@Service()
export class ArticleService {
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
