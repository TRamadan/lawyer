import { TestBed } from '@angular/core/testing';

import { MostshareenService } from './mostshareen.service';

describe('MostshareenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MostshareenService = TestBed.get(MostshareenService);
    expect(service).toBeTruthy();
  });
});
