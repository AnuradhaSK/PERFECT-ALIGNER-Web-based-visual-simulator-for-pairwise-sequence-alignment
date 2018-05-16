import {TestBed, inject} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NwalgoService} from './nwalgo.service';


describe('NwalgoService', () => {
  let service: NwalgoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NwalgoService]
    });
    service = TestBed.get(NwalgoService);
  });

  it('should be created NwalgoService', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data', () => {
    const dummyData = [
      {col: '1', score: '-1', preRow: '0', leftScore: '-2', diagonalScore: '-1', preCol: '0', row: '1', upScore: '-2'},
      {col: '2', score: '-2', preRow: '0', leftScore: '-2', diagonalScore: '-2', preCol: '1', row: '1', upScore: '-3'},
      {col: '3', score: '-3', preRow: '0', leftScore: '-3', diagonalScore: '-3', preCol: '2', row: '1', upScore: '-4'}];
    service._get('as', 'ss', '2', '1', '3').subscribe(data => {
      expect(data).toEqual(dummyData);
    });
  });

  it('should have _get function', () => {
    expect(service._get).toBeTruthy();
  });
});
