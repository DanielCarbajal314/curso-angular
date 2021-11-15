import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements OnInit {
  @Input() tasks: Task[] = [];
  @Output() taskToDelete = new EventEmitter<Task>()
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteTask(task: Task) {
    this.taskToDelete.emit(task);
  }

}
