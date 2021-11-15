import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HellowSquare } from './models/square-hellow.model';

@Component({
  selector: 'cuadraro',
  templateUrl: './cuadraro.component.html',
  styleUrls: ['./cuadraro.component.scss']
})
export class CuadraroComponent implements OnInit {
  @Input() color = "red"
  @Input() size = 100
  @Output() hellow = new EventEmitter<HellowSquare>();
  name = "";

  get squareStyle(){
    return `
      background-color: ${ this.color };
      width: ${ this.size }px;
      height: ${ this.size }px;
    `;
  }

  constructor() { }

  ngOnInit(): void {
  }

  emitHellow() {
    this.hellow.emit({
      name: this.name,
      color: this.color
    });
    this.name = '';
  }

}
