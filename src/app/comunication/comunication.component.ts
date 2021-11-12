import { AfterContentInit, AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { HellowSquare } from './cuadraro/models/square-hellow.model';
import { SaludadorComponent } from './saludador/saludador.component';

@Component({
  selector: 'app-comunication',
  templateUrl: './comunication.component.html',
  styleUrls: ['./comunication.component.scss']
})
export class ComunicationComponent implements OnInit, AfterContentInit, AfterViewChecked {
  squaresInformation = [
    { color: 'pink', size: 300 },
    { color: 'orange', size: 350 },
    { color: 'yellow', size: 400 },
    { color: 'blue', size: 200 },
  ]
  @ViewChild(SaludadorComponent) saludador!: SaludadorComponent;


  constructor() { }
  ngAfterViewChecked(): void {
    console.log('Estado del saludador after content view Checked');
    console.log(this.saludador);
  }
  ngAfterContentInit(): void {
    console.log('Estado del saludador after content init');
    console.log(this.saludador);
  }

  ngOnInit(): void {
    console.log('Estado del saludador en OnInit');
    console.log(this.saludador);
  }

  handleHellowSquareEvent(event: HellowSquare){
    this.saludador.sayHellow(event);
  }

}
