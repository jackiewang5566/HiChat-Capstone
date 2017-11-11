import { Component, OnInit, Input,Output ,EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';

@Component({
  selector: 'btn-radio',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => BtnGroupComponent), 
      multi: true 
    }
  ]
})
export class BtnGroupComponent implements OnInit, ControlValueAccessor {
  @Input()  btnItem: Object;
  @Input()  selectedBtn: String;
  @Input()  type:string;
  @Output() selectedBtnChange = new EventEmitter<String>(); 
 
  constructor() { 
  
  }

  ngOnInit() {
  
  }

  change(newValue:String) {
    this.selectedBtn = newValue;
    this.selectedBtnChange.emit(newValue);
    this.propagateChange(newValue);
  }

  /** Implement ControlValueAccessor method below */
  propagateChange = (_: any) => {};
  /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
  writeValue(value: any) {
    if (value !== undefined) {
      this.selectedBtn = value;
    }
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
