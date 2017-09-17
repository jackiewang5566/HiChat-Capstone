import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

export function validateEqualValidator(control: AbstractControl) {
    let password = control.parent && control.parent.controls ? control.parent.controls['password'].value : null; 
    let confirmed_password = control.parent && control.parent.controls ? control.parent.controls['confirm_password'].value : null;
    
    if (confirmed_password !== password && confirmed_password !== null && password !== null) {
        return { 
            'password_not_match': { 
                value: 'Password not match.' 
            } 
        };
    }

    return null;
}