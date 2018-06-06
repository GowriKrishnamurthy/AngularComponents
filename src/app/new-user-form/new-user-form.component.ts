import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'new-user-form',
  templateUrl: './new-user-form.component.html',
  styleUrls: ['./new-user-form.component.css']
})
export class NewUserFormComponent {

  @ViewChild('f') signupForm: Form;
  defaultSecretQuestion = "pet";
  answer = '';
  gender = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.setValue({
    //   userData:{
    //     username:suggestedName,
    //     email:'gk@yahoo.com'
    //   },
    //   questionAnswer:'test',
    //   secret:'teacher',
    //   gender:'female'
    // });
    // Better approach
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit() {
    this.signupForm.reset();
  }
}
