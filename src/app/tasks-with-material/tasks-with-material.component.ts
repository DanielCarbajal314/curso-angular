import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../task-form/services/task.service';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { MaterialTableTaskComponent } from './material-table-task/material-table-task.component';

@Component({
  selector: 'app-tasks-with-material',
  templateUrl: './tasks-with-material.component.html',
  styleUrls: ['./tasks-with-material.component.scss']
})
export class TasksWithMaterialComponent implements OnInit, AfterViewInit {
  @ViewChild(MaterialTableTaskComponent) table!: MaterialTableTaskComponent;


  constructor(public dialog: MatDialog, private taskService: TaskService) { }

  ngAfterViewInit(): void {
    this.taskService.getAllTasks().subscribe(task => {
      this.table.updateTable(task);
    });
  }

  ngOnInit(): void {

  }

  addNewTask() {
    const dialogRef = this.dialog.open(FormDialogComponent, {
      width: '40%'
    });
    dialogRef.afterClosed()
    .subscribe(task => {
      if(task){
        this.taskService.registerNewTask(task).subscribe(registeredTask => {
          this.table.addTaskToTable(registeredTask);
        })
      }
    });
  }

}
