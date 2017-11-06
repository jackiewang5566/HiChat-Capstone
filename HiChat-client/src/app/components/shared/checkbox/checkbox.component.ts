import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  private checked: boolean = false;

  @Input() check: boolean;
  @Input() label: string;
  @Input() size: string;
  @Input() position: string;
  @Output() checkChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log(this.label);
  }

  changeCheckbox() {
      this.checked = !this.checked;
      this.checkChange.emit(this.checked);
  }
}
