import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';
import { NewPerson } from './person-form/models/new-person.model';

@Component({
  selector: 'app-person-registry',
  templateUrl: './person-registry.component.html',
  styleUrls: ['./person-registry.component.scss']
})
export class PersonRegistryComponent implements OnInit {
  people: NewPerson[] = [];

  constructor(private peopleService:PeopleService) { }

  // ==== ESTO ES EQUIVALENTE A: ====
  // _peopleService:PeopleService
  // constructor(peopleService:PeopleService) {
  //   this._peopleService = peopleService;
  //  }

  ngOnInit(): void {
    this.people = this.peopleService.getPeople();
  }

  handleNewPersonCreated(event: NewPerson){
    this.people = [ event, ...this.people ];
    this.peopleService.registerPerson(event);
  }

}
