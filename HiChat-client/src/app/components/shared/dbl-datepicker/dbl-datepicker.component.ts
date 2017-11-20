import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms/src/form_builder';

@Component({
  selector: 'dbl-datepicker',
  templateUrl: './dbl-datepicker.component.html',
  styleUrls: ['./dbl-datepicker.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => DblDatepickerComponent), 
      multi: true 
    }
  ]
})
export class DblDatepickerComponent implements OnInit, ControlValueAccessor {
  @Input() test1;
  @Input() test2;
  @Input() test3;
  @Input() test4;
  constructor() {
    
  }

  ngOnInit() {
  }

  test1Change(event) {
    console.log(event);
    this.propagateChange(event);
  }

  /** Implement ControlValueAccessor method below */
  propagateChange = (_: any) => {};
  /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
  writeValue(value: any) {
    console.log(value);
  }

  /** 
   * registerOnChange(fn: any) is a method that registers a handler that should be called when something in the view has changed. 
   * It gets a function that tells other form directives and form controls to update their values. 
   * registerOnChange() has access to a function that informs the outside world about changes. 
   * Here’s where we can do special work, whenever we propagate the change, if we wanted to. 
   */
  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  /** 
   * registerOnTouched(fn: any) Similiar to registerOnChange(), this registers a handler specifically for when a control receives 
   * a touch event.
   * */
  registerOnTouched(fn) {

  }


}
