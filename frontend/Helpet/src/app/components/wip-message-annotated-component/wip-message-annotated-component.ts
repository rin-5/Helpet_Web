import { Component, inject } from '@angular/core';
import { MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';

@Component({
  imports: [MatButton, MatSnackBarActions, MatSnackBarAction, MatSnackBarLabel],
  selector: 'app-wip-message-annotated-component',
  styleUrl: './wip-message-annotated-component.css',
  templateUrl: './wip-message-annotated-component.html',
})
export class WipMessageAnnotatedComponent {
  snackBarRef = inject(MatSnackBarRef);
}
