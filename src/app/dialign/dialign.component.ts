import {Component, OnInit} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {DialignService} from '../services/dialign.service';
import * as FastaFileReader from 'bionode-fasta';
import * as Fasta from 'biojs-io-fasta';

@Component({
  selector: 'app-dialign',
  templateUrl: './dialign.component.html',
  styleUrls: ['./dialign.component.css'],
  providers: [DialignService]
})
export class DialignComponent implements OnInit {
  dataArray: any;
  file: any;
  p: any;

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

  /*uploadDocument(file) {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      console.log(fileReader.result);
    };
    fileReader.readAsText(this.file);
  }*/

  // call the service
  public _get(file) {
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


  }

}
