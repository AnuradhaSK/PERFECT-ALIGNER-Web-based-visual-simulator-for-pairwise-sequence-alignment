import { TestBed, inject } from '@angular/core/testing';
import { DialignService } from './dialign.service';

describe('DialignService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialignService]
    });
  });

  it('should be created DialignService', inject([DialignService], (service: DialignService) => {
    expect(service).toBeTruthy();
  }));
});
