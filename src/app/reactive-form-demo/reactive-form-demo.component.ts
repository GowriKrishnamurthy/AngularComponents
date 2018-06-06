import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

  genders = ['male', 'female'];
  myReactiveForm: FormGroup;

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'username':new FormControl(null),
      'email':new FormControl(null),
      'gender':new FormControl('female'),
    });
  }

}
