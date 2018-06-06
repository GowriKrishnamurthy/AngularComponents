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

  ngOnInit(): void {
    this.myReactiveForm=new FormGroup({
      'username':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('female')
    });
  }
  onSubmit(){
    
  }
}
