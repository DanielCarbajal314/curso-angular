import { Component, Input, OnInit } from '@angular/core';
import { NewPerson } from '../person-form/models/new-person.model';

@Component({
  selector: 'person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent implements OnInit {
  @Input() people: NewPerson[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
