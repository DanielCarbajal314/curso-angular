import { TestBed } from '@angular/core/testing';

import { CounterViewmodelService } from './counter-viewmodel.service';

describe('CounterViewmodelService', () => {
  let service: CounterViewmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterViewmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
