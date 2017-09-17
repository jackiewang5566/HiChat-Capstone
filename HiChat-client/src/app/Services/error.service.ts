import { Injectable, EventEmitter } from '@angular/core';
import { Error } from '../Models/error.model';

@Injectable()
export class ErrorService {

  constructor() { }

  errorOccurred = new EventEmitter<Error>();

  handleError(error: any) {
    console.log(error);
      // const errorData = new Error(error.title, error.error.message);
      // this.errorOccurred.emit(errorData);
  }

}
