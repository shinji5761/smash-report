import { TestBed } from '@angular/core/testing';

import { UserApuService } from './user-apu.service';

describe('UserApuService', () => {
  let service: UserApuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserApuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
