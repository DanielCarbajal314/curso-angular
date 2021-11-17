import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialTableTaskComponent } from './material-table-task.component';

describe('MaterialTableTaskComponent', () => {
  let component: MaterialTableTaskComponent;
  let fixture: ComponentFixture<MaterialTableTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialTableTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialTableTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
