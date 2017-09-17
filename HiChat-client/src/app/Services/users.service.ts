import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';
import { User } from '../Models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  // signupUser(user: User) {
  //   const headers = new Headers({ 'Content-Type': 'application/json' });
  //   const options = new RequestOptions({ headers: headers });
  //   return this.http.post('api/v1/users', user, options)
  //                   .subscribe();
  // }
}
