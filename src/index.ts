import { interval, Observable } from 'rxjs';
import { ajax } from "rxjs/ajax";

/* const interval$ = new Observable<number>(subscriber => {
  console.log('Observable executed');
  let counter = 1;
  let intervalId = setInterval(() => {
    console.log('Emitted', counter);
    subscriber.next(counter++);
  }, 1000);
  
 
  return () => {
    console.log('Teardown');
    clearInterval(intervalId);
  }
});

console.log('Before subscribe');

const subscription = interval$.subscribe(value => console.log(value));

setTimeout(() => {
  console.log('Unsubscribe');
  subscription.unsubscribe()
}, 5000); */


// Cold Observable
const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');

ajax$.subscribe(
  (data: any) => console.log('Sub 1: ', data.response.first_name)
);

ajax$.subscribe(
  (data: any) => console.log('Sub 2: ', data.response.first_name)
);

ajax$.subscribe(
  (data: any) => console.log('Sub 3: ', data.response.first_name)
);


// Hot observable all subscriptions share same source
