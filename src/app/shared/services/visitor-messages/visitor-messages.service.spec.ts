import { TestBed } from '@angular/core/testing';

import { VisitorMessagesService } from './visitor-messages.service';

describe('VisitorMessagesService', () => {
  let service: VisitorMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitorMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
