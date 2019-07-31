import { TestBed } from '@angular/core/testing';

import { DService } from './d.service';

describe('DService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DService = TestBed.get(DService);
    expect(service).toBeTruthy();
  });
});
