import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormTaskComponent } from './material-form-task.component';

describe('MaterialFormTaskComponent', () => {
  let component: MaterialFormTaskComponent;
  let fixture: ComponentFixture<MaterialFormTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFormTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
