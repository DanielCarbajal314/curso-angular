import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Person } from './model/person.model';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient ) { }

  getAllPeople() {
    return this.http.get<Person[]>('/person').pipe(
      map(people => people.map(person => ({
        ...person,
        date: new Date(person.date)
      })))
    );
  }

}
