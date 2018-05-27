import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class SignUpFormValidator{
    static cannotContainSpace(control:AbstractControl): ValidationErrors | null{
        // Check if there is any space in the user name
        if((control.value as string).includes(' '))
            return {cannotContainSpace: true};
    
         return null;
    }
}