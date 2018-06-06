import { Component} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidators } from './password.validator';

@Component({
  selector: 'change-password',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.css']
})
export class ChangePasswordFormComponent {
  changePasswordForm:FormGroup;

  constructor(fb:FormBuilder){
      this.changePasswordForm = fb.group({
        // Field level validations
        // Async validation check for the invalid old password 
        oldPassword:['',Validators.required,passwordValidators.invalidOldPassword],
        newPassword:['',Validators.required],
        confirmPassword:['',Validators.required]
      },{
      // Form level validation
      validator:passwordValidators.passwordDoNotMatch
    }
  );   
  }
  // Properties to get the member variables 
  get oldPassword(){return this.changePasswordForm.get('oldPassword'); }
  get newPassword(){return this.changePasswordForm.get('newPassword'); }
  get confirmPassword(){return this.changePasswordForm.get('confirmPassword'); }

  changePassword(f)
  {
    console.log(f.value);
  }

}
