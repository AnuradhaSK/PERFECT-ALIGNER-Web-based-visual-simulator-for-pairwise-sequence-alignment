import { Injectable } from '@angular/core';
import {Gene} from '../models/gene';

@Injectable()
export class TcoffeeService {
  dataArray: string[] | any | any[];
  private geneArray: any[];
  file: Blob;

  constructor() { }

  // return the geneArray which contains gene objects. Gene object has a id and a sequence
  getGeneArray(dataArray) {
    this.dataArray = dataArray;
    this.geneArray = new Array();
    let counter = 0;
    let id = '';
    let sequence = '';
    let first = true;
    for (let i in this.dataArray) {
      console.log(this.dataArray[i]);
      /* if ((this.dataArray[i] === ' ')) {
        continue;
      }*/
      if (counter === 0 && this.dataArray[i].charAt(0) !== '>') {
        console.log('This file is not in fasta format');
        break;
      }
      if (this.dataArray[i].charAt(0) === '>') {
        if (counter > 0) {
          this.geneArray.push(new Gene(id, sequence));
          console.log('id:'.concat(id));
          console.log('sequence:'.concat(sequence));
        }
        if (first) {
          first = false;
        }
        id = this.dataArray[i].substring(1);
        sequence = '';
      } else {
        sequence += this.dataArray[i];
      }
      counter += 1;
    }
    this.geneArray.push(new Gene(id, sequence));
    console.log('id:'.concat(id));
    console.log('sequence:'.concat(sequence));
    return this.geneArray;
  }
}
