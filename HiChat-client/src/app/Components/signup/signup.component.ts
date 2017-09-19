import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/user.model';
import { validateEqualValidator } from 'app/shared/equal-validator.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: [null, Validators.required],
      confirm_password: [null, Validators.required]
    }, { validator: validateEqualValidator('password', 'confirm_password') });
    
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
    const userInfo = new User(
      this.signupForm.value.username,
      this.signupForm.value.email,
      this.signupForm.value.password
    );

    this.authService.signup(userInfo)
                  .then(() => {
                    this.router.navigateByUrl('/login');
                  });
  }

  // onChange(event) {
  //   const field = event.target.name;
  // }

}
