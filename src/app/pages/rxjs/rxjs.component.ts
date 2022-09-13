import { Component, OnDestroy } from '@angular/core';
import { Observable, retry, interval, take, map, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public intervalSub: Subscription;

  constructor() { 

    // this.returnObservable().pipe(
    //   retry(1)
    // )
    // .subscribe({
    //   next: (value) => console.log('Subs', value),
    //   error: (error) => console.warn(error),
    //   complete: () => console.info('Obs terminado')
    // });

    this.intervalSub = this.returnInterval().subscribe(console.log);

  }

  ngOnDestroy(): void {
    this.intervalSub.unsubscribe();
  }

  // orden es importante, diferente si el take está al inicio de si está al final
  returnInterval(): Observable<number>{
    return interval(100)
            .pipe(
              take(10), 
              map( value => value + 1),
              filter<number>(value => (value % 2 === 0 ) ? true : false),
            );
  }

  returnObservable(){

    let i  = -1;
    
    const obs$ = new Observable<number>( observer => {
      
      const interval = setInterval( () => {
        
        i++
        
        observer.next(i);

        if(i === 4) {
          clearInterval( interval);
          observer.complete();
        }

        if( i === 2){
          observer.error('i reached 2');
        }

      }, 1000)

    });

    // obs$.subscribe(
    //   value => console.log('Subs', value),
    //   error => console.warn('Error:', error),
    //   () => console.info('Obs terminado')
    // );    
    
    return obs$;
  }


}
