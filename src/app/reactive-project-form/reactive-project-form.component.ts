import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'reactive-project-form',
  templateUrl: './reactive-project-form.component.html',
  styleUrls: ['./reactive-project-form.component.css']
})
export class ReactiveProjectFormComponent implements OnInit {
  projectForm: FormGroup;
  // projectStatus:['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null,
        [Validators.required,
        CustomValidators.invalidProjectName.bind(this)],
        CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable')
    });
  }

  get projectName() {
    return this.projectForm.get('projectName');
  }
  get email() {
    return this.projectForm.get('email');
  }
  get projectStatus() {
    return this.projectForm.get('projectStatus');
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
