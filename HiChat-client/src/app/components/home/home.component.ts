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
  constructor(private el: ElementRef, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    
  }
  
}
