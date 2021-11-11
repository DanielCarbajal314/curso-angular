import { AfterViewChecked, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit, AfterViewChecked {

  constructor() { }
  ngAfterViewChecked(): void {
    console.log('Estoy renderizado en la pantalla');
  }

  ngOnInit(): void {
    console.log('Estoy Iniciandome');
  }

}
