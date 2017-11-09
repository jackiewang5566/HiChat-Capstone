import { Component, OnInit , Input ,Output ,EventEmitter} from '@angular/core';
import { NgbDatepickerConfig, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateFRParserFormatter } from "./ngb-date-fr-parser-formatter"


@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  providers: [{provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}]
})
export class DatePickerComponent implements OnInit {
  @Input() public dates;
  @Input() public require;
  @Input () public future;
  @Output() datesChange = new EventEmitter<String>();
  public currentDate:Date = new Date();
  public maxDate:Object;
  public pattern:RegExp = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/
  
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
  this.maxDate = this.future?"-":{year:this.currentDate.getFullYear(), month:this.currentDate.getMonth()+1, day:this.currentDate.getDate()};
}
onDateChanged(event): void {
 if(this.pattern.test(event)){
  const selectDate = new Date(event);
  event ={
   year:selectDate.getFullYear(), 
   month:selectDate.getMonth()+1, 
   day:selectDate.getDate()
 };

 }
 
  this.datesChange.emit(event);
 }

  
}
