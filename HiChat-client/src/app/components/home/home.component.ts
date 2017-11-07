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
    let newRow = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": false,
      "active": true
    };
    
    for (let i in this.rows) {
      if (this.rows[i].dummy) {
        // add newRow to rows
        this.rows.splice(+i, 1, newRow);
        const newSelectedObj: any = {
          selected: {
            "0": newRow
          }
        };
        this.onSelect(newSelectedObj);
        break;
      }
    }
  }

  removeRow() {
    let dummyRow = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false
    };
    console.log(this.selected);
    // if (this.rows.length < 6) {
    //   this.rows.splice(index, 1, dummyRow);
    //   this.rows.sort(this.compareFunction);
    // } else {
    //   this.rows.splice(index, 1);
    // }
    for (let i in this.rows) {
      if (JSON.stringify(this.rows[i]) === JSON.stringify(this.selected[0])) {
        this.rows.splice(+i, 1);
      }
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
