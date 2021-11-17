import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/task-form/models/task.model';
import { TaskService } from 'src/app/task-form/services/task.service';

@Component({
  selector: 'material-table-task',
  templateUrl: './material-table-task.component.html',
  styleUrls: ['./material-table-task.component.scss']
})
export class MaterialTableTaskComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['description', 'date', 'action'];
  dataSource = new MatTableDataSource<Task>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private taskService: TaskService){

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateTable(tasks: Task[]) {
    this.dataSource.data = tasks;    
  }

  addTaskToTable(task: Task) {
    this.dataSource.data = [task, ...this.dataSource.data ];    
  }

  ngOnInit(): void {
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(task.id).subscribe(()=>{
      this.dataSource.data = this.dataSource.data.filter(x => x.id !== task.id);
    }) 
  }

}
