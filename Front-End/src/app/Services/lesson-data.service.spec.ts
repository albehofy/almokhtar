import { TestBed } from '@angular/core/testing';

import { LessonDataService } from './lesson-data.service';

describe('LessonDataService', () => {
  let service: LessonDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
