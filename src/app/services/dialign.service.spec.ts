import { TestBed, inject } from '@angular/core/testing';

import { DialignService } from './dialign.service';

describe('DialignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialignService]
    });
  });

  it('should be created', inject([DialignService], (service: DialignService) => {
    expect(service).toBeTruthy();
  }));
});
