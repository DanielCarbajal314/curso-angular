import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRegistryFormComponent } from './task-registry-form.component';

describe('TaskRegistryFormComponent', () => {
  let component: TaskRegistryFormComponent;
  let fixture: ComponentFixture<TaskRegistryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskRegistryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskRegistryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
