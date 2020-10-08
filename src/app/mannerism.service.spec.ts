import { TestBed } from '@angular/core/testing';

import { MannerismService } from './mannerism.service';

describe('MannerismService', () => {
  let service: MannerismService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MannerismService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
