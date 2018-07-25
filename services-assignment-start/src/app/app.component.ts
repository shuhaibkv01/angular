import { Component } from '@angular/core';
import { UsersService } from './user.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

  activeUsers: string[] = [];
  inactiveUsers: string[] = [];

  toInactiveCount: number = 0;
  toActiveCount: number = 0;



  constructor(private usersService: UsersService, private counterService: CounterService) {
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;

    this.counterService.toInactiveCount.subscribe(()=> {
      this.toInactiveCount++;
    });

    this.counterService.toActiveCount.subscribe(()=> {
      this.toActiveCount++;
    });

    //this.toInactiveCount = this.counterService.toInactiveCount;
    //this.toActiveCount = this.counterService.toActiveCount;
  }


}
