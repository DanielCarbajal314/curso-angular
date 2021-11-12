import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  name = '';

  constructor() { }

  get nameIsLong() {
    return this.name.length > 5;
  }

  get thereIsName() {
    return this.name.length > 0;
  }

  ngOnInit(): void {
  }

  clear() {
    this.name = '';
  }

}
