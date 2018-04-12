import {TestBed, inject} from '@angular/core/testing';

import {SharingService} from './sharing.service';

describe('SharingService', () => {
  let service: SharingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharingService]
    });
    service = TestBed.get(SharingService);
    service.setData(
      [{col: '1', score: '-1', preRow: '0', leftScore: '-2', diagonalScore: '-1', preCol: '0', row: '1', upScore: '-2'},
        {col: '2', score: '-2', preRow: '0', leftScore: '-2', diagonalScore: '-2', preCol: '1', row: '1', upScore: '-3'},
        {col: '1', score: '0', preRow: '1', leftScore: '-3', diagonalScore: '0', preCol: '0', row: '2', upScore: '-2'},
        {col: '2', score: '0', preRow: '1', leftScore: '-1', diagonalScore: '0', preCol: '1', row: '2', upScore: '-3'},
        {col: '2', row: '2'}, {col: '1', row: '1'}, {col: '0', row: '0'}, {sequence1: 'CC', sequence2: 'GC'}], 'CC', 'GC', '1', '-1', '-1');
  });

  it('should be created SharingService', () => {
    expect(service).toBeTruthy();
  });

  it('should return visibility', () => {
    service.setVisibility(true);
    expect(service.getVisibility()).toBe(true);
  });

  it('should return Data', () => {
    const stringOne = service.getStringOne();
    const stringTwo = service.getStringTwo();
    const match = service.getMatch();
    const mismatch = service.getMismatch();
    const gap = service.getGap();
    expect(stringOne).toBe('CC');
    expect(stringTwo).toBe('GC');
    expect(match).toBe('1');
    expect(mismatch).toBe('-1');
    expect(gap).toBe('-1');
  });
});
