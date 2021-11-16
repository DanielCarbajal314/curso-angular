import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  $time = timer(1000, 1000).pipe(
    map(() => new Date()),
    map(date => date.toLocaleTimeString())
  );

  constructor() { }

}
