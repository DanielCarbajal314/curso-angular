import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NewTask } from 'src/app/task-form/models/new-task.model';

@Component({
  selector: 'material-form-task',
  templateUrl: './material-form-task.component.html',
  styleUrls: ['./material-form-task.component.scss']
})
export class MaterialFormTaskComponent implements OnInit {
  taskForm!: FormGroup;
  @Output() newTaskSaved = new EventEmitter<NewTask>();
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      description: ['', Validators.required],
      date: [null, Validators.required]
    })
  }

  onSummit(){
    this.newTaskSaved.emit(this.taskForm.value);
  }

}
