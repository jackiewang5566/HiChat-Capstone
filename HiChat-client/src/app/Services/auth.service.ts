import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { ErrorService } from './error.service';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {

    constructor(
      private http: Http, 
      private errorService: ErrorService
    ) { }

    /**
     * Register a user.
     */
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('api/v1/auth/signup', body, options)
                        .toPromise()
                        .then(function (res) {
                            console.log('signup returned below');
                            console.log(res);
                        })
                        // .map((response: Response) => response.json())
                        // .catch((error: Response) => {
                        //     this.errorService.handleError(error.json());
                        //     return Observable.throw(error.json());
                        // });
    }

    /**
     * User login
     */
    login(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        const options = new RequestOptions({ headers: headers });
        return this.http.post('api/v1/auth/login', body, options)
                        .toPromise()
                        .then(function (res) {
                            console.log('login returned below');
                            console.log(res)
                            return res;
                        })
    }

    /** 
     * Authenticate a user. Save a token string in localStorage.
     */
    authenticateUser(token, email) {
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    } 

    /**
     * Check if a user is authenticated.
     */
    isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    /**
     * De-authenticate a user
     */
    deauthenticate() {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
    }

    /**
     * Get token value
     */
    getToken() {
        return localStorage.getItem('token');
    }

    /**
     * Get email
     */
    getEmail() {
        return localStorage.getItem('email');
    }

}
