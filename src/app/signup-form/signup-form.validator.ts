import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class SignUpFormValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        // Check if there is any space in the user name
        if ((control.value as string).includes(' '))
            return { cannotContainSpace: true };

        return null;
    }
    static uniqueUserName(control: AbstractControl): Promise<ValidationErrors | null> {

        return new Promise((resolve, reject) => {
            // Async operation
            setTimeout(() => {
                // Assume if the name in server is Smith 
                if (control.value === 'Smith')
                    resolve({ uniqueUserName: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}