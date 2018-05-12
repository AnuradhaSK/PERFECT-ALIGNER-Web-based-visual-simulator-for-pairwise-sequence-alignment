import {TestBed, inject} from '@angular/core/testing';

import {MsaSharingService} from './msa-sharing.service';
import {Gene} from '../models/gene';

describe('MsaSharingService', () => {
  let service: MsaSharingService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsaSharingService]
    });
    service = TestBed.get(MsaSharingService);
  });

  it('should be created MsaSharingService', () => {
    expect(service).toBeTruthy();
  });

  it('should be return visibulity', () => {
    service.setVisibility(true);
    expect(service.getVisibility()).toBe(true);
  });

  it('should be return scheme', () => {
    service.setScheme('Clustal');
    expect(service.getScheme()).toBe('Clustal');
  });

  it('should be return pannel data', () => {
    const gene1 = new Gene('gnl|GNOMON|17969.m', '---------------------------------------AAGCAAAAAGC\n' +
      'AGAGAAGG---AGAAACCAGGTTTCCTTAG----------------TAGg\n' +
      'a-------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '------------------------------TCCACCAGGCATTCAGCTTt\n' +
      'gaagagGAACAGTC--------------------CAGGGATGATGAGCAG\n' +
      'GATAGTCAAGACA---GC-------GA-----------------------\n' +
      '-----------------Gtccgaggatgggagtattgacgaagaccctga\n' +
      'gGGCAATGAAAACACGGTGGATCCaatcgACTGTTTGAGT---GCCCCAC\n' +
      'GTgCTGTTGTCACCAAAGAAGAGCTCATCACTGAGGAG------------\n' +
      '---------------------------');
    const gene2 = new Gene('gnl|GNOMON|70594930.m', '------------------------------------------CAAGAACA\n' +
      'GTGGATGA---AGAAAACAGCAGGCGATAG----------------CAGC\n' +
      'G------------------------------------------------T\n' +
      'GGT--------------------------TGGCGCC--------------\n' +
      '--------------------------------------------------\n' +
      '-------TTGCCCCTGGGCTCATCTTCTAGCAT-----------------\n' +
      '-----CACTGCCCTgatacgcgaaagCAGCG--TGGTTGGTCCCT-----\n' +
      '-----TCCTGtgGGCTCATCTTCTGGCATCACTGCC----CTGATAATGT\n' +
      'Aa------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '--------------------------------------------------\n' +
      '-GGCGGTAGCAGCGAGGTTGGTCC-----CCTGCCTGTGG---GCTCATC\n' +
      'TT-CTGGAATCACCA-------------CCCT------------------\n' +
      '---------------------------');
    service.setPanelData([gene1, gene2]);
    const result = service.getPanelData();
    expect(result).toContain(gene1);
    expect(result).toContain(gene2);
  });

  it('should be return ids', () => {
    const gene1 = new Gene('1aboA', 'DFVASGD');
    const gene2 = new Gene('1ycsB', 'KGVIYAL');
    service.setPanelData([gene1, gene2]);
    const result = service.getIdArray();
    expect(result).toContain('1aboA');
    expect(result).toContain('1ycsB');
  });

  it('should be return number of aligned characters to show in chart', () => {
    const chartData = ['5', '6', '10', '4'];
    service.setChartData(chartData);
    const result = service.getChartData();
    expect(result).toContain('5');
    expect(result).toContain('6');
    expect(result).toContain('10');
    expect(result).toContain('4');
  });
});
