import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {
  genders = ['male', 'female'];
  myReactiveForm: FormGroup;
  
  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'gender': new FormControl('female'),
    });
  }

  get username() {
    return this.myReactiveForm.get('userData.username');
  }

  get email() {
    return this.myReactiveForm.get('userData.email');
  }
  onSubmit() {

  }
}
