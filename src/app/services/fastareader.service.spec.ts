import { TestBed, inject } from '@angular/core/testing';

import { FastareaderService } from './fastareader.service';

describe('FastareaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FastareaderService]
    });
  });

  it('should be created', inject([FastareaderService], (service: FastareaderService) => {
    expect(service).toBeTruthy();
  }));
});
