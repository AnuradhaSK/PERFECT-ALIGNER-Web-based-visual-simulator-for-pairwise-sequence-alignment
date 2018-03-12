import { TestBed, inject } from '@angular/core/testing';

import { SwalgoService } from './swalgo.service';

describe('SwalgoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwalgoService]
    });
  });

  it('should be created', inject([SwalgoService], (service: SwalgoService) => {
    expect(service).toBeTruthy();
  }));
});
