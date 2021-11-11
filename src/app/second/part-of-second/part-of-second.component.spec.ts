import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOfSecondComponent } from './part-of-second.component';

describe('PartOfSecondComponent', () => {
  let component: PartOfSecondComponent;
  let fixture: ComponentFixture<PartOfSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartOfSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOfSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
