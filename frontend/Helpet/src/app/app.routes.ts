import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Articles } from './pages/articles/articles';
import { Forum } from './pages/forum/forum';
import { MyForum } from './pages/my-forum/my-forum';
import { User } from './pages/user/user';
import { NotFound } from './pages/not-found/not-found';
import { ArticleDetailed } from './pages/articles/article-detailed/article-detailed';
import { PostView } from './pages/forum/post-view/post-view';
import { MapComponent } from './pages/map/map';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'home',
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
    path: 'post/:id',
    component: PostView
  },
  {
    path: 'map',
    component: MapComponent
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
