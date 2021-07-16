import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static invalidOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if ( control.value !== '1234') {
                resolve({ invalidOldPassword: true });
            }
            else {
                resolve(null);
            }
        });
    }

    static passwordsAreDifferent(control: AbstractControl) : ValidationErrors | null{
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');

        if (newPassword.value !== confirmPassword.value) {
            return { passwordsAreDifferent: true };
        }
        else {
            return null;
        }
    }
}