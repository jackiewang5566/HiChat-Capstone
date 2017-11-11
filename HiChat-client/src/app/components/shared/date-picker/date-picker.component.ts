import { Component, OnInit, Input, Output ,EventEmitter, ViewChild, forwardRef, OnChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl } from '@angular/forms';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from "./ngb-date-fr-parser-formatter";
import { DatepickerValidator } from './date-picker.validators';

@Component({
    selector: 'date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css'],
    providers: [
      { 
        provide: NgbDateParserFormatter, 
        useClass: NgbDateFRParserFormatter 
      },
      { 
        provide: NG_VALUE_ACCESSOR, 
        useExisting: forwardRef(() => DatePickerComponent), 
        multi: true 
      }
    ]
})
export class DatePickerComponent implements OnInit, OnChanges, ControlValueAccessor {
    @Input() public customClass;
    @Input() public dates;
    @Input() public require;
    @Input () public future;
    @Output() datesChange = new EventEmitter<String>();
    @ViewChild('dp') dp;
    public currentDate:Date = new Date();
    public maxDate:Object;
    public pattern:RegExp = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
    public validateFn: Function;
  
    constructor() {

    }

    changeFormat(item:any){
      const selectDate = new Date(item);
      item ={
        year:selectDate.getFullYear(), 
        month:selectDate.getMonth()+1, 
        day:selectDate.getDate()
      };
      
      return item;

    }

    ngOnInit() { 
      // this.maxDate = this.future?"-":{year:this.currentDate.getFullYear(), month:this.currentDate.getMonth()+1, day:this.currentDate.getDate()};
      // DatepickerValidator(this.maxDate);
    }

    ngOnChanges(changes) {
      this.maxDate = this.future?"-":{year:this.currentDate.getFullYear(), month:this.currentDate.getMonth()+1, day:this.currentDate.getDate()};
      this.validateFn = DatepickerValidator(this.require, this.maxDate);
    }

    validate(c: FormControl) {
      return this.validateFn(c);
    }

    onDateChanged(event): void {
      // structure like { year: 2017, month: 11, day: 10 }
      if (this.pattern.test(event)){
          const selectDate = new Date(event);
          event = {
            year:selectDate.getFullYear(), 
            month:selectDate.getMonth()+1, 
            day:selectDate.getDate()
          };
      }
    
      this.datesChange.emit(event);
      this.propagateChange(event);
    }


    /** Implement ControlValueAccessor method below */
    propagateChange = (_: any) => {};
    /** writeValue(obj: any) is the method that writes a new value from the form model into the view or (if needed) DOM property. */
    writeValue(value: any) {
      if (value !== undefined) {
        this.dates = value;
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
