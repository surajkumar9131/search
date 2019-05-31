import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  listIndex: any;
  @Input() userDetail: any;
  @Input() selectedIndex: any;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.listIndex = 0;
  }

  mouseEnter(i, id) {
    this.selectedIndex = i;
    this.valueChange.emit(i);
  }

  mouseLeave() {
    this.selectedIndex = 0;
    this.valueChange.emit(this.selectedIndex);
  }

}
