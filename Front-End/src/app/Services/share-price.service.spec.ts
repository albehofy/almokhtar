import { TestBed } from '@angular/core/testing';

import { SharePriceService } from './share-price.service';

describe('SharePriceService', () => {
  let service: SharePriceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePriceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
