import { Component, OnInit } from '@angular/core';
import { CounterViewmodelService } from '../../counter-viewmodel.service';

@Component({
  selector: 'nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent implements OnInit {

  constructor(private counterViewmodelService: CounterViewmodelService) { }

  ngOnInit(): void {
  }

  increase(){
    this.counterViewmodelService.increaseCounter();
  }

}
