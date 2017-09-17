import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'app/Models/user.model';
import { validateEqualValidator } from 'app/Shared/equal-validator.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, [ 
        Validators.required,
        validateEqualValidator
      ]),
      confirm_password: new FormControl(null, [
        Validators.required,
        validateEqualValidator
      ])
    });
    
  }

  get username() {
    return this.signupForm.get('username');
  }

  get email() {
    return this.signupForm.get('email');
  }

  get password() {
    return this.signupForm.get('password');
  }

  get confirm_password() {
    return this.signupForm.get('confirm_password');
  }

  onSubmit() {
    // const user = new User(
    //   this.signupForm.value.username,
    //   this.signupForm.value.email,
    //   this.signupForm.value.password
    // );
  }

  onChange(event) {
    const field = event.target.name;
  }

}
