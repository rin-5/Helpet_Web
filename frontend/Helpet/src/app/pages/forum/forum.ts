import { Component } from '@angular/core';
import { ForumCard } from '../../components/forum-card/forum-card';

@Component({
  imports: [ForumCard],
  selector: 'app-forum',
  styleUrl: './forum.css',
  templateUrl: './forum.html',
})
export class Forum {
  mockupPostData = [
    {
      id: 1,
      title: 'Post With Image Mockup',
      author: 'someAuthor',
      image: './assets/card_test.png',
    },
    {
      id: 1,
      title: 'Post Without Image Mockup',
      author: 'someAuthor'
    },
    {
      id: 1,
      title: 'Post With Image Mockup 2',
      author: 'someAuthor',
      image: './assets/card_test.png',
    },
  ];
}
