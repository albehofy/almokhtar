import { TestBed } from '@angular/core/testing';

import { AddingNewCommentService } from './adding-new-comment.service';

describe('AddingNewCommentService', () => {
  let service: AddingNewCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingNewCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
