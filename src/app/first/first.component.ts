import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {
  counter = 200;
  styleExpression = "width: 200px"


  constructor() { }
  ngOnDestroy(): void {
    console.log('me estoy destruyento');
  }

  ngOnInit(): void {
    console.log('estoy iniciando');
  }

  count(){
    this.counter+=10;
    this.styleExpression = `width: ${this.counter}px`
  }

}
