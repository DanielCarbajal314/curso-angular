import { Component, OnInit } from '@angular/core';
import { NewTask } from './models/new-task.model';
import { Task } from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAllTasks().subscribe(task => this.tasks = task);
  }

  onTaskSaved(event: NewTask){
    this.taskService.registerNewTask(event).subscribe(task => this.tasks.push(task));
  }

  onTaskToDelete(task: Task){
    this.taskService.deleteTask(task.id).subscribe(()=> {
      this.tasks = this.tasks.filter(oldTask => oldTask.id !== task.id );
    });
  }

}
