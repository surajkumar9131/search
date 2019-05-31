import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../models/user-detail';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  result: any;
  userList: any;
  searchedKey: string;
  listIndex: any;

  constructor() { }

  ngOnInit() {
    this.searchedKey = null;
    this.userList = UserDetails.data;
    this.listIndex = 0;
  }

  searchKeyword(key) {
    console.log(key);
    if (key.toLowerCase() && key.toLowerCase() !== '' ) {
      const filteredList = this.userList.filter(item => {
        return (item.name.toLowerCase().includes(key) ||
          item.address.toLowerCase().includes(key) ||
          item.pincode.toLowerCase().includes(key) ||
          item.id.toLowerCase().includes(key) || this.searchForItem(item.items, key));
      });
      if (filteredList.length > 5) {
        filteredList.splice( 0, filteredList.length - 5);
      }
      this.result = filteredList;
    } else {
      this.result = [];
    }
  }

  searchForItem(item, key) {
    for (const i of item) {
      return i.toLowerCase().includes(key);
    }
  }

  clearSearch() {
    this.result = null;
  }

  handleKeyUp(e) {
    if ([38, 13, 40].indexOf(e.keyCode) > -1) {
      let length = this.userList.length;
      if (length > 5) {
        length = 5;
      }
      if (length > 0) {
        e.preventDefault();
        if (e.keyCode === 38) {
          if (this.listIndex === 0 || this.listIndex === -1) {
            this.listIndex = length;
          }
          this.listIndex = (this.listIndex - 1) % length;
        } else if (e.keyCode === 40) {
          this.listIndex = (this.listIndex + 1) % length;
        } else if (e.keyCode === 13) {
        }
      }
    }
  }

  changeIndex(e) {
    this.listIndex = e;
  }

}
