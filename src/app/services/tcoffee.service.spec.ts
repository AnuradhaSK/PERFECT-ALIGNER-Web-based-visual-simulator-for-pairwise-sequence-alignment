import { TestBed, inject } from '@angular/core/testing';

import { TcoffeeService } from './tcoffee.service';

describe('TcoffeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TcoffeeService]
    });
  });

  it('should be created', inject([TcoffeeService], (service: TcoffeeService) => {
    expect(service).toBeTruthy();
  }));
});
