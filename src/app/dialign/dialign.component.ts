import {Component, OnInit} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {DialignService} from '../services/dialign.service';
import * as FastaFileReader from 'bionode-fasta';
import * as Fasta from 'biojs-io-fasta';
import {MsaSharingService} from '../services/msa-sharing.service';

@Component({
  selector: 'app-dialign',
  templateUrl: './dialign.component.html',
  styleUrls: ['./dialign.component.css'],
  providers: [DialignService]
})
export class DialignComponent implements OnInit {

  title='Dialign';
  /*selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };*/


  constructor(protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
    this.msasharingService.setVisibility(false);
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
