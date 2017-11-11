import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DatepickerValidator } from '../shared/date-picker/date-picker.validators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('container') container;
  @ViewChild('input[ngbDatepicker]') datePicker;
  ee1Form: FormGroup;

  dynamicId;
  testDate;

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

  tableFixedRowSize: number = 6

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.dummyRows = this.rows;
    this.ee1Form = fb.group({
      'searchUser': ['Neal', Validators.required],
      'testDatepicker': [null, DatepickerValidator(true, null)],
      'testCheckbox': [null, null]
    });
  }

  ngOnInit() {
      // this.ee1Form = new FormGroup({
      //   'searchUser': new FormControl('Neal', Validators.required)
      // });
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

  checkSelectedRow(row, column, value) {
    console.log(row);
    return !row.dummy
  }

  prevSelected;
  onSelect({ selected }) {
    // console.log('Select Event', selected, this.selected);
    if (selected && selected[0] && !selected[0].dummy) {
      if (this.prevSelected) {
        this.prevSelected[0].active = false;
      }
      
      selected[0].active = true;
      this.prevSelected = selected;
    }
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
        // this.checkSelectedRow(newRow, null, null);
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

  submitForm() {
    console.log('test');
    console.log(this.ee1Form);
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
