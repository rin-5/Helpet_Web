import { Component } from '@angular/core';
import { ForumCard } from '../../../components/forum-card/forum-card';

@Component({
  imports: [ForumCard],
  selector: 'app-post-view',
  styleUrl: './post-view.css',
  templateUrl: './post-view.html',
})
export class PostView {}
