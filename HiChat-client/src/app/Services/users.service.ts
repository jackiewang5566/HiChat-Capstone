import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { User } from '../Models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: Http, private errorService: ErrorService) { }

  signupUser(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http.post('api/v1/users', body, options)
                    .map((response: Response) => response.json())
                    .catch((error: Response) => {
                      this.errorService.handleError(error.json());
                      return Observable.throw(error.json());
                    })
  }

  
}
