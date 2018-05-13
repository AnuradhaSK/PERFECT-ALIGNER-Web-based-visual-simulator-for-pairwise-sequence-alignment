import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import * as Fasta from 'bionode-fasta';
import {Gene} from '../models/gene';


@Injectable()
export class DialignService {
  dataArray: string[] | any | any[];
  geneArray: any[];
  file: Blob;
  chartDataArray: any;

  constructor() {
  }

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
        // console.log('This file is not in fasta format');
        break;
      }
      if (this.dataArray[i].charAt(0) === '>') {
        if (counter > 0) {
          this.geneArray.push(new Gene(id, sequence.trim()));
  /**/        console.log('id:'.concat(id));
          console.log('sequence:'.concat(sequence.trim().length.toString()));
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
    this.geneArray.push(new Gene(id, sequence.trim()));
    console.log('id:'.concat(id));
    console.log('sequence:'.concat(sequence.trim().length.toString()));
    return this.geneArray;
  }


  // count the number of aligned characters in gene sequences
  alignedCharCount(geneArray: Gene[]) {
    this.chartDataArray = new Array();
    for (const gene of geneArray) {
      let count = 0;
      for (let i = 0; i < gene.sequence.length; i++) {
        if (65 <= gene.sequence.charCodeAt(i) && gene.sequence.charCodeAt(i) <= 90) {
          count++;
        }
      }
      console.log(count);
      this.chartDataArray.push(count.toString());
    }
    return this.chartDataArray;
  }

  /*checkFormatted(geneArray) {
    let max = geneArray[0].sequence.length;
    let min = geneArray[0].sequence.length;
    for (const gene of geneArray) {
      console.log(gene.sequence.length);
      if (gene.sequence.length < min) {
        min = gene.sequence.length;
      }
      if (gene.sequence.length > max) {
        max = gene.sequence.length;
      }
    }
    if (min === max) {
      return true;
    }
    else {
      return false;
    }
  }*/


}
