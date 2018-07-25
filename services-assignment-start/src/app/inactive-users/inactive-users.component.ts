import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UsersService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  @Input() users: string[];
 // @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService, private counterService: CounterService){

  }

  onSetToActive(id: number) {
   // this.userSetToActive.emit(id);
   this.usersService.onSetToActive(id);
   this.counterService.incrimentToActiveCount();
  }
}
