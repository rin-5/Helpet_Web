import { Component, input } from '@angular/core';
import {MatCard, MatCardAvatar, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";

@Component({
  imports: [MatCard, MatCardAvatar, MatCardHeader, MatCardSubtitle, MatCardTitle],
  selector: 'app-forum-card',
  styleUrl: './forum-card.css',
  templateUrl: './forum-card.html',
})
export class ForumCard {
  title = input.required<string>();
  author = input<string>('This is a default placeholder text.');
  description = input<string>('This is a placeholder description text. for a post');
  imageUrl = input<string | undefined>();

}
