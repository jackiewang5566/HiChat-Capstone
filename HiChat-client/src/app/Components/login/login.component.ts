import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'app/services/auth.service';
import { User } from 'app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
  errors: any

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const user = new User(
      this.loginForm.value.email, 
      this.loginForm.value.password
    );

    this.authService.login(user)
        .subscribe(response => {
          console.log(response);
            if (response.status === 200) {
                this.errors = {};
                
                this.authService.authenticateUser(response.token, this.loginForm.value.email);
                
                // response.json().then(function (json) { // .json() method is an asychronous process
                //     console.log(json);
                //     this.authService.authenticateUser(json.token, this.loginForm.value.email,);
                //     this.context.router.replace('/');
                // }.bind(this));
            } else {
                console.log('Login failed');
                // response.json().then(function (json) {
                //     const errors = json.errors ? json.errors: {};
                //     this.errors.summary = json.message;
                //     this.setState({ errors });
                // }.bind(this));
            }
        });
  }
}
