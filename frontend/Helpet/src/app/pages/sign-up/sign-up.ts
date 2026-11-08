import { Component } from '@angular/core';
import { SignUpForm } from '../../components/sign-up-form/sign-up-form';

@Component({
  imports: [SignUpForm],
  selector: 'app-sign-up',
  styleUrl: './sign-up.css',
  templateUrl: './sign-up.html',
})
export class SignUp {}
