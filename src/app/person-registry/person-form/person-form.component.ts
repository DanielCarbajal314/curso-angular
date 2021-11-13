import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NewPerson } from './models/new-person.model';

@Component({
  selector: 'person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  name = "";
  dateOfBirth?: Date = undefined;
  @Output() newPersonCreated = new EventEmitter<NewPerson>();

  constructor() { }

  ngOnInit(): void {
  }

  savePerson() {
    const newPerson:NewPerson = {
      name: this.name,
      dateOfBirth: this.dateOfBirth!
    }
    this.newPersonCreated.emit(newPerson);
    this.clearForm();
  }

  clearForm() {
    this.name = "";
    this.dateOfBirth = undefined;
  }

}
