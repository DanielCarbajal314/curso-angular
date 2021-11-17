import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksWithMaterialComponent } from './tasks-with-material.component';

describe('TasksWithMaterialComponent', () => {
  let component: TasksWithMaterialComponent;
  let fixture: ComponentFixture<TasksWithMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksWithMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksWithMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
