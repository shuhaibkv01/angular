import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumber : number[] = [];
  evenNumber : number[] = [];

  startGame(count: number) {
    if(count % 2 == 0) {
      this.oddNumber.push(count);
    } else {
      this.evenNumber.push(count);
    }
  }
}
