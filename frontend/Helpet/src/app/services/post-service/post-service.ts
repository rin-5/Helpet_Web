import { Service, signal } from '@angular/core';

export interface Post {
  id: number;
  title: string;
  author: string;
  description: string;
  imageUrl?: string;
}

@Service()
export class PostService {
  private mockupPostData = signal<Post[]>([
    {
      id: 0,
      title: 'Post With Image Mockup',
      author: 'someAuthor',
      description:
        'This is a mockup post. It will probably be replaced with real data someday.\n Anyways, as I was saying. Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
      imageUrl: './assets/card_test.png',
    },
    {
      id: 1,
      title: 'Post Without Image Mockup',
      author: 'someAuthor2',
      description: "This is my super cool post. It's super cool, right?",
    },
    {
      id: 2,
      title: 'Post With Image Mockup 2',
      author: 'someAuthor3',
      description: 'This is a post similar to the first one.',
      imageUrl: './assets/card_test.png',
    },
  ]);
  getPostById(id: number) {
    return this.mockupPostData().find((post) => post.id === id);
  }

  getPosts() {
    return this.mockupPostData();
  }
}
