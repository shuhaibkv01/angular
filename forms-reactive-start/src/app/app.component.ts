import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Anna', 'John'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('Defaut Name', [Validators.required, this.forBiddenValidator.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmail)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    // this.signupForm.valueChanges.subscribe(
    //   (value) => {
    //     console.log(value);

    //   }
    // );

    this.signupForm.statusChanges.subscribe(
      (value) => {
        console.log(value);

      }
    );

    // this.signupForm.setValue({
    //   'userData': {
    //     'username': 'Def',
    //     'email': 'dd'
    //   },
    //   'gender': 'male',
    //   'hobbies': []
    // });

    this.signupForm.patchValue({
      
      'gender': 'female'
    });
  }

  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forBiddenValidator(control: FormControl): { [s: string]: boolean } {

    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true }
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
