import { TestBed } from '@angular/core/testing';

import { CounterplanService } from './counterplan-api.service';

describe('CounterplanService', () => {
  let service: CounterplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
