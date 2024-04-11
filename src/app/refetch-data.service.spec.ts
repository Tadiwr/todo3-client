import { TestBed } from '@angular/core/testing';

import { RefetchDataService } from './refetch-data.service';

describe('RefetchDataService', () => {
  let service: RefetchDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RefetchDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
