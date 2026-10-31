import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Articles } from './pages/articles/articles';
import { Forum } from './pages/forum/forum';
import { MyForum } from './pages/my-forum/my-forum';
import { User } from './pages/user/user';
import { NotFound } from './pages/not-found/not-found';
import { ArticleDetailed } from './pages/articles/article-detailed/article-detailed';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'articles',
    component: Articles
  },
  {
    path:'articles/view',
    component: ArticleDetailed
  },
  {
    path: 'forum',
    component: Forum
  },
  {
    path: 'my-forum',
    component: MyForum
  },
  {
    path: 'map',
    component: Map
  },
  {
    path: 'user',
    component: User
  },
  {
    path: '**',
    component: NotFound
  }
];
