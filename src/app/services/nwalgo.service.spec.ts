import { TestBed, inject } from '@angular/core/testing';

import { NwalgoService } from './nwalgo.service';

describe('NwalgoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NwalgoService]
    });
  });

  it('should be created', inject([NwalgoService], (service: NwalgoService) => {
    expect(service).toBeTruthy();
  }));
});
