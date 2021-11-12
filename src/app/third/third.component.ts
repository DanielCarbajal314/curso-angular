import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {
  colors = [ 
    { color: 'red', name: 'rojo'}, 
    { color: 'blue', name: 'azul'},
    { color: 'green', name: 'verde'},
    { color: 'purple', name: 'purpura'}]
  counter = 0;
  dateTimeNow = new Date(2019,11,1);

  get colorExpression() {    
    return `background-color: ${ this.getActiveColor().color };`;
  }

  get colorName() {
    return this.getActiveColor().name;
  }

  private getActiveColor() {
    const colorIndex = this.counter%(this.colors.length);
    return this.colors[colorIndex];
  }

  constructor() { }

  ngOnInit(): void {
    console.log('Estoy Iniciandome');
  }

  changeColor() {
    this.counter++;
  }

}
