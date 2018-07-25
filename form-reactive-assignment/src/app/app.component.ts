import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;

  forbiddenProject = 'Test';

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'project': new FormControl(null, [Validators.required, this.forbiddenEmail.bind(this)]),
      'mail': new FormControl(null, [Validators.email, Validators.required], this.forbiddenEmail),
      'status': new FormControl('critical')
    });
  }

  onSubmit() {
    console.log(this.signUpForm);
  }

  forbiddenValidator(control: FormControl): { [s: string]: boolean } {

    if (this.forbiddenProject === control.value) {
      return { 'projectIsForbidden': true }
    }
    return null;
  }

  forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {

    const promis = new Promise<any>(
      (resolve, reject) => {
        setTimeout(
          () => {
            if (control.value === 'test@test.com') {
              resolve({ 'emailForbidden': true });
            } else {
              resolve(null);
            }
          }
          , 1500);
      }
    );
    return promis;
  }

}
