import { Component, computed, effect, inject, input } from '@angular/core';
import { Post, PostService } from '../../../services/post-service/post-service';
import { Router, RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule],
  selector: 'app-post-view',
  styleUrl: './post-view.css',
  templateUrl: './post-view.html',
})
export class PostView {
  private router = inject(Router);
  private postService = inject(PostService);

  id = input<string>();

  post = computed<Post | undefined>(() => {
    const currentId = this.id();

    console.log('Valor bruto de id():', currentId);
    console.log('datatype:', typeof currentId);
    if (currentId === undefined || currentId === '') return undefined;
    const idNumeric = Number(currentId);

    return this.postService.getPostById(idNumeric);
  });

  constructor() {
    effect(() => {
      const currentId = this.id();
      const currentPost = this.post();

      if (currentId !== undefined && currentId !== '') {
        if (currentPost === undefined) {
          console.log("The post wasn't found.");
          this.router.navigate(['/notfound']);
        }
      }
    });


  }
}
