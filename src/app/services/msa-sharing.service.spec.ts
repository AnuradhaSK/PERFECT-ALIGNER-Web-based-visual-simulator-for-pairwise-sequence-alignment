import { TestBed, inject } from '@angular/core/testing';

import { MsaSharingService } from './msa-sharing.service';

describe('MsaSharingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsaSharingService]
    });
  });

  it('should be created', inject([MsaSharingService], (service: MsaSharingService) => {
    expect(service).toBeTruthy();
  }));
});
