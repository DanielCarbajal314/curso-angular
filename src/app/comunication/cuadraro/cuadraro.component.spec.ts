import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuadraroComponent } from './cuadraro.component';

describe('CuadraroComponent', () => {
  let component: CuadraroComponent;
  let fixture: ComponentFixture<CuadraroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuadraroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuadraroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
