import { AbstractControl, ValidationErrors, Validators } from "@angular/forms";

export class passwordValidators {
    //Check values from the server - Async validation.
    static invalidOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            //Test value - 1234
            if (control.value !== '1234')
                resolve({ invalidOldPassword: true });
            else
                resolve(null);
        });
    }

    static passwordDoNotMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value)
            return { passwordDoNotMatch: true };
        else
            return null;
    }
}