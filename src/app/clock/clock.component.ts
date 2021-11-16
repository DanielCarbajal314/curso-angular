import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClockService } from './services/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  time = '';
  private subscriptions: Subscription[] = [];

  constructor(private clockService: ClockService) { }

  ngOnInit(): void {
    this.handleSubscriptions(this.clockService.$time.subscribe(time => {
      this.time = time;
      console.log(this.time);
    }));
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(x => x.unsubscribe());
  }

  public handleSubscriptions(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

}
