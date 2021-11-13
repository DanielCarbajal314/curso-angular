import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonRegistryComponent } from './person-registry.component';

describe('PersonRegistryComponent', () => {
  let component: PersonRegistryComponent;
  let fixture: ComponentFixture<PersonRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
