import { TestBed } from '@angular/core/testing';

import { RightNavService } from './right-nav.service';

describe('RightNavService', () => {
  let service: RightNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RightNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
