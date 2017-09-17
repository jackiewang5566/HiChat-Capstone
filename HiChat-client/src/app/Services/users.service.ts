import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: Http, private errorService: ErrorService) { }

  signupUser(user: User) {
    const body = JSON.stringify(user);
    console.log(body);
    const headers = new Headers({ 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('api/v1/user/signup', body, options)
                    .map((response: Response) => response.json())
                    .catch((error: Response) => {
                      this.errorService.handleError(error.json());
                      return Observable.throw(error.json());
                    })
  }

  
}
