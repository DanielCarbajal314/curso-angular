import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NewTask } from '../models/new-task.model';

@Component({
  selector: 'task-registry-form',
  templateUrl: './task-registry-form.component.html',
  styleUrls: ['./task-registry-form.component.scss']
})
export class TaskRegistryFormComponent implements OnInit {
  description = '';
  date = new Date();
  @Output() taskSaved = new EventEmitter<NewTask>();

  constructor() { }

  ngOnInit(): void {
  }

  saveTask() {
    const { description, date } = this;
    this.taskSaved.emit({description, date});
    this.clearForm();
  }
  clearForm() {
    this.date = new Date();
    this.description = '';
  }

}
