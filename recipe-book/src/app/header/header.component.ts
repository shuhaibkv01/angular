import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //@Output() featureSelected = new  EventEmitter<string>();
 
  constructor() { }

  ngOnInit() {
  }

  // onSelect(type: string) {
  //   this.featureSelected.emit(type);
  // }

}
