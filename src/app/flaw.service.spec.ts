import { TestBed } from '@angular/core/testing';

import { FlawService } from './flaw.service';

describe('FlawService', () => {
  let service: FlawService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlawService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
