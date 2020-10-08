import { TestBed } from '@angular/core/testing';

import { DisplayNPCService } from './display-npc.service';

describe('DisplayNPCService', () => {
  let service: DisplayNPCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayNPCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
