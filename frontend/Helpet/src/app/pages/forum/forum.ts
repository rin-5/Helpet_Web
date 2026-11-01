import { Component, inject } from '@angular/core';
import { ForumCard } from '../../components/forum-card/forum-card';
import { PostService } from '../../services/post-service/post-service';

@Component({
  imports: [ForumCard],
  selector: 'app-forum',
  styleUrl: './forum.css',
  templateUrl: './forum.html',
})
export class Forum {
  postService = inject(PostService);

  get mockupPostData() {
    return this.postService.getPosts();
  }
}
