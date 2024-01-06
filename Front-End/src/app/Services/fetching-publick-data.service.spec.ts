import { TestBed } from '@angular/core/testing';

import { FetchingPublickDataService } from './fetching-publick-data.service';

describe('FetchingPublickDataService', () => {
  let service: FetchingPublickDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchingPublickDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
