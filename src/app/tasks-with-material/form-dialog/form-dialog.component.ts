import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NewTask } from 'src/app/task-form/models/new-task.model';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<FormDialogComponent>) { }

  ngOnInit(): void {
  }

  onNewTaskSaved(task: NewTask){
    this.dialogRef.close(task);
  }

}
