import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => CheckboxComponent), 
      multi: true 
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  private checked: boolean = false;

  @Input() check: boolean;
  @Input() label: string;
  @Input() size: string;
  @Input() position: string;
  @Output() checkChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    
  }

  changeCheckbox() {
      this.checked = !this.checked;
      this.checkChange.emit(this.checked);
      this.propagateChange(this.checked);
  }


  /** Implement ControlValueAccessor method below */
  propagateChange = (_: any) => {};
  /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
  writeValue(value: any) {
    if (value !== undefined) {
      this.checked = value;
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
