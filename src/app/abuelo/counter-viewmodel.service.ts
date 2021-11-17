import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterViewmodelService {
  $counter: Subject<number> = new Subject();
  counter = 0;

  constructor() { }

  setCounter(counterNumber: number){
    this.counter = counterNumber;
    this.$counter.next(counterNumber);
  }

  increaseCounter(){
    this.$counter.next(this.counter++);
  }

}
