import { TestBed } from '@angular/core/testing';

import { ArmanService } from './arman.service';

describe('ArmanService', () => {
  let service: ArmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
