import { FormControl, FormGroup } from '@angular/forms';

export function validateEqualValidator(password_key: string, confirm_password_key: string) {
    return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[password_key];
    let confirm_password = group.controls[confirm_password_key];

    if (password.value !== confirm_password.value) {
      return {        
        mismatchedPasswords: true
      };
    }
  }
}