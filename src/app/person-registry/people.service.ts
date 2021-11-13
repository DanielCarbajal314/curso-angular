import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NewPerson } from './person-form/models/new-person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private people: NewPerson[] = []
  private baseUrl = environment.apiEndPoint;

  constructor() { }

  getPeople(): NewPerson[] {
    return [...this.people];
  }

  registerPerson(person: NewPerson) {
    this.people.push(person);
  }
}
