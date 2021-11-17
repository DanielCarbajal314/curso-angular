import { Component, OnInit } from '@angular/core';
import { CounterViewmodelService } from './counter-viewmodel.service';

@Component({
  selector: 'app-abuelo',
  templateUrl: './abuelo.component.html',
  styleUrls: ['./abuelo.component.scss']
})
export class AbueloComponent implements OnInit {
  count = 0;


  constructor(private counterViewmodelService: CounterViewmodelService) { }

  ngOnInit(): void {
    this.counterViewmodelService.setCounter(20);
    this.counterViewmodelService.$counter.subscribe(value => {
      this.count = value;
    })
  }

}
