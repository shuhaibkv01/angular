import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultCaurse = 'advanced';

  submitted = false;
  
  user = {
    course: '',
    email: ''

  }
 
  @ViewChild('f') userData : NgForm;

  onSubmit() {
    this.user.email = this.userData.value.userData.email;
    this.user.course = this.userData.value.userData.course;
    this.submitted = true;
  }
}
