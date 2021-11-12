import { Component, OnInit } from '@angular/core';
import { HellowSquare } from '../cuadraro/models/square-hellow.model';

@Component({
  selector: 'saludador',
  templateUrl: './saludador.component.html',
  styleUrls: ['./saludador.component.scss']
})
export class SaludadorComponent implements OnInit {
  color = 'red';
  name = '';

  get hellowStyle() {    
    return `color: ${ this.color };`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  sayHellow(event: HellowSquare){
    this.color = event.color;
    this.name = event.name;
  }
}
