import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NgForm } from '@angular/forms';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatepickerValidator } from '../shared/date-picker/date-picker.validators';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ViewChild('container') container;
  @ViewChild('input[ngbDatepicker]') datePicker;
  ee1Form: FormGroup;

  dynamicId;
  testDate;
  address = [
    { name: "Domestic", value: "domestic" },
    { name: "Foreign", value: "foreign" }
  ];
  addressSelection;
  
  noMedicalConditionFlag: boolean = false;
  rowsFormArray: FormArray;
  rows = [];
  // rows = [
  //   {
  //     "conditionType": "",
  //     "condition": "",
  //     "dateOfDiagnosis": "",
  //     "dummy": true,
  //     "active": false,
  //     "index": 0
  //   },
  //   {
  //     "conditionType": "",
  //     "condition": "",
  //     "dateOfDiagnosis": "",
  //     "dummy": true,
  //     "active": false,
  //     "index": 1
  //   },
  //   {
  //     "conditionType": "",
  //     "condition": "",
  //     "dateOfDiagnosis": "",
  //     "dummy": true,
  //     "active": false,
  //     "index": 2
  //   },
  //   {
  //     "conditionType": "",
  //     "condition": "",
  //     "dateOfDiagnosis": "",
  //     "dummy": true,
  //     "active": false,
  //     "index": 3
  //   },
  //   {
  //     "conditionType": "",
  //     "condition": "",
  //     "dateOfDiagnosis": "",
  //     "dummy": true,
  //     "active": false,
  //     "index": 4
  //   },
  //   {
  //     "conditionType": "",
  //     "condition": "",
  //     "dateOfDiagnosis": "",
  //     "dummy": true,
  //     "active": false,
  //     "index": 5
  //   }
  // ];
  dummyRows;

  selected = [];

  tableFixedRowSize: number = 6

  constructor(private el: ElementRef, private fb: FormBuilder) {
    this.dummyRows = this.rows;
  }

  ngOnInit() {
    // this.addressSelection = this.address[0].value;
    this.ee1Form = this.fb.group({
      'searchUser': ['Neal', Validators.required],
      'testDatepicker': [null, DatepickerValidator(true, null)],
      'testCheckbox': [null, null],
      'testBtnGroup': [this.address[0].value, null],
      'conditions': this.initConditions()
    });
  }

  initConditions() {
    // Initilize FormArray
    this.rowsFormArray = this.fb.array([]);
    let defaultCondition = {
      "conditionType": "",
      "condition": "",
      "dateOfDiagnosis": "",
      "dummy": true,
      "active": false,
      "index": 0
    };
    let newCondition;
    let conditionFormGroup;
    for (let i = 0; i < this.tableFixedRowSize; i++) {
      newCondition = { ...defaultCondition };
      newCondition.index = i;
      conditionFormGroup = this.fb.group({
        "conditionType": [],
        "condition": [],
        "dateOfDiagnosis": [],
        "dummy": [true],
        "active": [false],
        "index": [i]
      });
      this.rows.push(newCondition);
      this.rowsFormArray.push(this.fb.control({'i': conditionFormGroup}));
    }
    // this.fb.group({
    //   '0': this.rowsFormArray
    // })
    return this.rowsFormArray;
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
        const newRowControl = this.fb.control(newRow);
        // remove old row and add newRow to rows
        this.rows.splice(i, 1, newRow);
        // setControl replace an existing control
        (<FormArray>this.ee1Form.get('conditions')).setControl(i, newRowControl); 
        // this.checkSelectedRow(newRow, null, null);
        this.onSelect(newSelectedObj);
        break;
      }
    }

    if (i === this.rows.length) {
      newRow.index = i;
      this.rows.push(newRow);
      (<FormArray>this.ee1Form.get('conditions')).push(this.fb.control(newRow));
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
      (<FormArray>this.ee1Form.get('conditions')).removeAt(removeIndex);
    } else {
      this.rows.splice(removeIndex, 1);
      (<FormArray>this.ee1Form.get('conditions')).removeAt(removeIndex)
      this.rows.push(dummyRow);
      (<FormArray>this.ee1Form.get('conditions')).push(this.fb.control(dummyRow));
    }

    // update subsequent index
    for (let i = removeIndex; i < this.rows.length; i++) {
      this.rows[i].index--;
      (<FormArray>this.ee1Form.get('conditions')).setControl(i, this.fb.control(this.rows[i]));
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

  addressChange() {

  }

  submitForm() {
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
