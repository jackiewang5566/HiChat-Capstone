import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

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
