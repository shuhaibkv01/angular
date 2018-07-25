import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidator {


    static forbiddenValidator(control: FormControl): { [s: string]: boolean } {
        const forbiddenProject = 'Test';
        if (forbiddenProject === control.value) {
            return { 'projectIsForbidden': true }
        }
        return null;
    }

    static forbiddenEmail(control: FormControl): Promise<any> | Observable<any> {

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