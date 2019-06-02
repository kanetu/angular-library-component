import { TestBed } from '@angular/core/testing';

import { KanetuService } from './kanetu.service';

describe('KanetuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KanetuService = TestBed.get(KanetuService);
    expect(service).toBeTruthy();
  });
});
