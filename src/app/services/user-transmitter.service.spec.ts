import { TestBed } from '@angular/core/testing';

import { UserTransmitterService } from './user-transmitter.service';

describe('UserTransmitterService', () => {
  let service: UserTransmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTransmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
