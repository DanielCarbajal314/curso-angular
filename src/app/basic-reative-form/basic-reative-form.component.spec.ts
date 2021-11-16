import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicReativeFormComponent } from './basic-reative-form.component';

describe('BasicReativeFormComponent', () => {
  let component: BasicReativeFormComponent;
  let fixture: ComponentFixture<BasicReativeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicReativeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicReativeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
