import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AuthService } from './auth.service';
import { ErrorService } from './error.service';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {

  constructor(private http: Http, private errorService: ErrorService) { }

  
}
