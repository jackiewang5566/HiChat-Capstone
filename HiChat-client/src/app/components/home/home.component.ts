import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '(document: click)': 'closeDatepicker($event)'
  }
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
      "active": false
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false
    },
    {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false
    }
  ];
  dummyRows;

  selected = [];

  constructor(private _eref: ElementRef) {
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
    console.log(row);
    return {
      'activeRowClass': row.active
    }
  }

  prevSelected;
  onSelect({ selected }) {
    console.log('Select Event', selected, this.selected);
    if (this.prevSelected) {
      this.prevSelected[0].active = false;
    }
    
    selected[0].active = true;
    this.prevSelected = selected;
  }

  onActivate(event) {
    // console.log('Activate Event', event);
  }

  addRow() {
    let newRow = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": false,
      "active": false
    };
    // if (this.rows[0].dummy) {
    //   this.rows.splice(0, 1, newRow);
    // } else {
    //   this.rows.splice(0, 0, newRow);
    // }
    for (let i in this.rows) {
      if (this.rows[i].dummy) {
        this.rows.splice(+i, 1, newRow);
        break;
      }
    }
  }

  removeRow(index) {
    let dummyRow = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false
    };
    if (this.rows.length < 6) {
      this.rows.splice(index, 1, dummyRow);
      this.rows.sort(this.compareFunction);
    } else {
      this.rows.splice(index, 1);
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

  openDatepicker(id) {
    this.dynamicId = id;
    console.log(this.dynamicId);
  }

  closeFlag: boolean = false;
  closeDatepicker(event) {
    // if (!this.container.nativeElement.contains(event.target) && this.datePicker) { // check click origin
    //   this.datePicker.close();
    // }

    // if(this._eref.nativeElement.querySelector('ngb-datepicker') && (!this._eref.nativeElement.querySelector('ngb-datepicker').contains(event.target)
    // && !this._eref.nativeElement.querySelector('.input-group-addon').contains(event.target) && this.closeFlag)) {
    //   let self = this;
    //   setTimeout(function(){
    //     self.dynamicId.close();
    //     self.closeFlag = true;
    //   },10);
    // }
  }
}
