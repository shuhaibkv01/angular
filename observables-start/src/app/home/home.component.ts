import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject, interval, Observer, Subscription, } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObservableSubscription: Subscription;
  myObservableSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    //const squareValues = map((val: number) => val * val);
    const myNumbers = interval(1000).pipe(map((num: number) => {
      return num * 2;
    }));
    this.numbersObservableSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {

      setTimeout(() => {
        observer.next('First Package..')
      }, 2000);

      setTimeout(() => {
        observer.next('Second Package..')
      }, 4000);

      setTimeout(() => {
        //observer.error('Does not work');
        //observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 8000);
      setTimeout(() => {
        observer.next('Third Package..')
      }, 10000);
    });

    this.myObservableSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (err: string) => {
        console.log('Here : ' + err);
      },
      () => {
        console.log('Completed..');
      }
    );
  }

  ngOnDestroy() {
    console.log('Called ngOnDestroy')
    this.numbersObservableSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe();
  }

}
