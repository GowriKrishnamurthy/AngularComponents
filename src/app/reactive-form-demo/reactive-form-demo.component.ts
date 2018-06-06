import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {
  genders = ['male', 'female'];
  myReactiveForm: FormGroup;
  forbiddenUsernames = ['Smith', 'John'];

  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
    });
    // this.myReactiveForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.myReactiveForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.myReactiveForm.setValue({
      'userData': {
        'username': 'Gk',
        'email': 'Gk@test.com'
      },
      'gender': 'female',
      'hobbies': []
    });
    this.myReactiveForm.patchValue({
      'userData': {
        'username': 'Gow',
      }
    });

  }

  get username() {
    return this.myReactiveForm.get('userData.username');
  }

  get email() {
    return this.myReactiveForm.get('userData.email');
  }
  onSubmit() {
    console.log(this.myReactiveForm)
    this.myReactiveForm.reset();
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) != -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
