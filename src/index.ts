import { interval, Observable } from 'rxjs';

const interval$ = new Observable<number>(subscriber => {
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
}, 5000);


// Cold Observable



// Hot observable