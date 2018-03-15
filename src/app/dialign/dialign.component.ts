import {Component, OnInit} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {DialignService} from '../services/dialign.service';


@Component({
  selector: 'app-dialign',
  templateUrl: './dialign.component.html',
  styleUrls: ['./dialign.component.css'],
  providers: [DialignService]
})
export class DialignComponent implements OnInit {
  dataArray: any;

  /*selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };*/


  constructor(protected dialignService: DialignService) {
  }

  ngOnInit() {
  }
  // call the service
  public _get() {
    this.dialignService._get().subscribe((data) => {
      this.dataArray = data;
    });

  }

  upload() {
    setTimeout(() => {
      this._get();
    }, 2000);
  }

}
