import { TestBed } from '@angular/core/testing';

import { TcoffeeService } from './tcoffee.service';
import {Gene} from '../models/gene';


describe('TcoffeeService', () => {
  let service: TcoffeeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TcoffeeService]
    });
    service = TestBed.get(TcoffeeService);
  });

  it('should be created TcoffeeService', () => {
    expect(service).toBeTruthy();
  });


  it('should be return gene array', () => {
    const gene1 = new Gene('1aboA', 'DFVASGD');
    const gene2 = new Gene('1ycsB', 'KGVIYAL');
    const dataArray = ['>1aboA', 'DFVASGD', '>1ycsB', 'KGVIYAL'];
    const result = service.getGeneArray(dataArray);
    expect(result).toContain(gene1);
    expect(result).toContain(gene2);
  });

  it('should be return number of aligned characters ', () => {
    const gene1 = new Gene('1aboA', 'DFVASGD');
    const gene2 = new Gene('1ycsB', 'KGVIYAL');
    const gene3 = new Gene('1pht', 'GYqYRAL');

    const geneArray = [gene1, gene2, gene3];
    const result = service.alignedCharCount(geneArray);
    expect(result).toContain('7');
    expect(result).toContain('6');
  });
});
