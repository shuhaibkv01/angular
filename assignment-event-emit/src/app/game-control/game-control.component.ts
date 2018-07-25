 
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  count : number = 1;
  @Output() startGame = new EventEmitter<number>();

  interval;

  constructor() { }

  ngOnInit() {
  }

  onClickStart() {
    console.log('Started..');
    this.interval = setInterval(()=> {
      this.startGame.emit(this.count++);
    }, 1000);
  }

  onClickStop() {
    clearInterval(this.interval);
  }

}
