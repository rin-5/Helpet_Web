import { Component } from '@angular/core';
import {SignUpForm} from "../../components/sign-up-form/sign-up-form";
import { SignInForm } from '../../components/sign-in-form/sign-in-form';

@Component({
  imports: [SignInForm],
  selector: 'app-sign-in',
  styleUrl: './sign-in.css',
  templateUrl: './sign-in.html',
})
export class SignIn {}
