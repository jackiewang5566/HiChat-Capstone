import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('container') container;
  @ViewChild('input[ngbDatepicker]') datePicker;

  dynamicId;

  noMedicalConditionFlag: boolean = false;
  rows = [
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 0
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 1
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 2
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 3
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 4
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 5
    }
  ];
  dummyRows;

  selected = [];

<<<<<<< HEAD
  tableFixedRowSize: number = 6
=======

  readonly pageLimit = 6;
>>>>>>> 92385b04d600d697fad72b80dd1c830434a56a2d

  constructor(private el: ElementRef) {
    this.dummyRows = this.rows;
  }

  ngOnInit() {
    
  }

  

  getCellClass({ row, column, value }): any {
    return {
      'table-cell': true
    }
  }

  getRowClass(row) {
    return {
      'activeRowClass': row.active
    }
  }

  prevSelected;
  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    console.log(selected);
    if (!selected[0].dummy) {
      if (this.prevSelected) {
        this.prevSelected[0].active = false;
      }
      
      selected[0].active = true;
      this.prevSelected = selected;
    }
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  addRow() {
    const newRow = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": false,
      "active": true,
      "index": 0
    };
    const newSelectedObj: any = {
      selected: {
        "0": newRow
      }
    };
    
    let i = 0;
    for (; i < this.rows.length; i++) {
      if (this.rows[i].dummy) {
        // update the index
        newRow.index = i;
        // add newRow to rows
        this.rows.splice(i, 1, newRow);
        this.onSelect(newSelectedObj);
        break;
      }
    }

    if (i === this.rows.length) {
      newRow.index = i;
      this.rows.push(newRow);
      this.onSelect(newSelectedObj);
    }
  }

  removeRow() {
    let dummyRow = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": this.rows.length
    };

    const removeIndex = this.selected[0].index;
    if (this.rows.length > this.tableFixedRowSize) {
      this.rows.splice(removeIndex, 1);
    } else {
      this.rows.splice(removeIndex, 1);
      this.rows.push(dummyRow);
    }

    // update subsequent index
    for (let i = removeIndex; i < this.rows.length; i++) {
      this.rows[i].index--;
    }
  }

  compareFunction(a, b) {
    return a.dummy ? b : a;
  }

  noMedicalCondition(noMedicalConditionFlag) {
    if (noMedicalConditionFlag) {
      this.rows = this.dummyRows;
    }
  }

  // openDatepicker(id) {
  //   this.dynamicId = id;
  //   console.log(this.dynamicId);
  // }

  // closeFlag: boolean = false;
  // closeDatepicker(event) {
  //   // if (!this.container.nativeElement.contains(event.target) && this.datePicker) { // check click origin
  //   //   this.datePicker.close();
  //   // }

  //   // if(this._eref.nativeElement.querySelector('ngb-datepicker') && (!this._eref.nativeElement.querySelector('ngb-datepicker').contains(event.target)
  //   // && !this._eref.nativeElement.querySelector('.input-group-addon').contains(event.target) && this.closeFlag)) {
  //   //   let self = this;
  //   //   setTimeout(function(){
  //   //     self.dynamicId.close();
  //   //     self.closeFlag = true;
  //   //   },10);
  //   // }
  // }
}
