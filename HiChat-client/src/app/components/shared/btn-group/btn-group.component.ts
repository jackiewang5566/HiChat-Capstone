import { Component, OnInit, Input,Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'btn-radio',
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.css']
})
export class BtnGroupComponent implements OnInit {
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
  }

}
