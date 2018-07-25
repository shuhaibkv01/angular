import { Component } from "@angular/core";

@Component(
    {
        selector: 'app-success-alert',
        templateUrl: './success-alert.component.html',
        styles:[`
            #success-alert {
                background-color: green;
            }
        `]
    }
)
export class SuccessAlertComponent {

}