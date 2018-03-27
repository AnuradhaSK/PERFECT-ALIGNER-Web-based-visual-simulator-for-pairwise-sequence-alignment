import { TestBed, inject } from '@angular/core/testing';

import { SharingService } from './sharing.service';

describe('SharingService', () => {
  let service: SharingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharingService]
    });
    service = TestBed.get(SharingService);
  });

  it('should be created SharingService',() => {
    expect(service).toBeTruthy();
  });
});
