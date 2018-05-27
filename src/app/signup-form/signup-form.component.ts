import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpFormValidator } from './signup-form.validator';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
form = new FormGroup(
  {
    // FormControl- param1: initial value, 2nd- validator function reference
    'username':new FormControl('',
    [
      Validators.required,
      Validators.minLength(5),
      SignUpFormValidator.cannotContainSpace
    ]
    ),
    'password':new FormControl('',[
      Validators.required,
      Validators.minLength(5)]
    )
  });
  
  get username()
  {
    return this.form.get('username');
  }

  get password()
  {
    return this.form.get('password');
  }
}
