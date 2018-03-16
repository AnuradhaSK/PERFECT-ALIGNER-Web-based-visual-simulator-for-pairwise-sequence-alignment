import {Component, OnInit} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {DialignService} from '../services/dialign.service';
import * as FastaFileReader from 'bionode-fasta';
import * as Fasta from 'biojs-io-fasta';
import {Gene} from '../gene';

@Component({
  selector: 'app-dialign',
  templateUrl: './dialign.component.html',
  styleUrls: ['./dialign.component.css'],
  providers: [DialignService]
})
export class DialignComponent implements OnInit {
  dataArray: any;
  geneArray: any;
  file: any;
  private JSONArray: any;

  /*selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };*/


  constructor(protected dialignService: DialignService) {
  }

  ngOnInit() {
  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }

  uploadDocument(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.dataArray = fileReader.result.split('\n');
    };
    fileReader.readAsText(this.file);
    this.read();
  }

  read() {
    let counter = 0;
    let id = '';
    let sequence = '';
    let first = true;
    for (const i in this.dataArray) {
      if (counter === 0 && this.dataArray[i].charAt(0) !== '>') {
        console.log('This file is not in fasta format');
        break;
      }
      if (this.dataArray[i].charAt(0) === '>') {
        if (counter > 0) {
          // this.geneArray.push(new Gene(id, sequence));
          console.log('id:'.concat(id));
          console.log('sequence:'.concat(sequence));
        }
        if (first) {
          first = false;
        } else {
          id = this.dataArray[i].substring(1);
          sequence = '';
        }
      } else {
        sequence += this.dataArray[i];
      }
      counter += 1;
    }
    // this.geneArray.push(new Gene(id, sequence));
    console.log('id:'.concat(id));
    console.log('sequence:'.concat(sequence));
  }

  // call the service
  /*public _get(file) {
    this.dialignService._get(file).subscribe((data) => {
      this.dataArray = data;
    });
    // this.dialignService.reader();

  }

  uploadDocument(file) {
   setTimeout(() => {
      this._get(file);
    }, 2000);
    // FastaFileReader.obj(file).on('data', console.log);
    // this.p = Fasta.read('http://dialign.gobics.de/repository/DIALIGN-1435256264/sequences.fa');


  }*/

}
