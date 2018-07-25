import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-deatils',
  templateUrl: './user-deatils.component.html',
  styleUrls: ['./user-deatils.component.css']
})
export class UserDeatilsComponent implements OnInit {

  userClicks = [];
  count : number  = 1;
  showMessage = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.showMessage = !this.showMessage;
    this.userClicks.push(this.count++);
  }

  getColor(index : number) {
      return index >= 4 ? 'blue' : 'red';
  }

}
