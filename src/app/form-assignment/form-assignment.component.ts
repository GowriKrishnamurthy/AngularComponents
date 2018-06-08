import { Component, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent {
  @ViewChild('f') myForm: Form;
  subscriptions = ["Basic", "Advanced", "Pro"];
  defaultSubscription = 'Advanced';
  onSubmit() {
    // console.log(this.myForm.value);
  }
}
