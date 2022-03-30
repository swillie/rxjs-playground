import { Observable, of } from "rxjs";
//Creation functions

//of function. emits all values then completes


/* of('Alice', 'Ben', 'Charlie').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
}); */

/* const names$ = new Observable<string>(subscriber => {
    subscriber.next('Alice');
    subscriber.next('Ben');
    subscriber.next('Charlie');
    subscriber.complete();
})

names$.subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
}); */
ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
    next: value => console.log(value),
    complete: () => console.log('Completed')
});

function ourOwnOf(...args: string[]): Observable<string> {
    return new Observable<string>(subscriber => {
        for (let i = 0; i< args.length; i++) {
            subscriber.next(args[i]);
        }
        subscriber.complete();
    });
}