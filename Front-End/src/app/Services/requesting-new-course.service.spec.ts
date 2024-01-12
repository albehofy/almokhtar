import { TestBed } from '@angular/core/testing';

import { RequestingNewCourseService } from './requesting-new-course.service';

describe('RequestingNewCourseService', () => {
  let service: RequestingNewCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestingNewCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
