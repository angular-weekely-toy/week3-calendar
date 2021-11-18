import { TestBed } from '@angular/core/testing';

import { KCalendarService } from './k-calendar.service';

describe('KCalendarService', () => {
  let service: KCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
