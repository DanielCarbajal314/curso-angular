import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    console.log('me estoy destruyento');
  }

  ngOnInit(): void {
    console.log('estoy iniciando');
  }

}
