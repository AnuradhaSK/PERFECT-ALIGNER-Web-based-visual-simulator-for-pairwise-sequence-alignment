import { TestBed, inject } from '@angular/core/testing';

import { MsaSharingService } from './msa-sharing.service';

describe('MsaSharingService', () => {
  let service: MsaSharingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsaSharingService]
    });
    service = TestBed.get(MsaSharingService);
  });

  it('should be created MsaSharingService', () => {
    expect(service).toBeTruthy();
  });
});
