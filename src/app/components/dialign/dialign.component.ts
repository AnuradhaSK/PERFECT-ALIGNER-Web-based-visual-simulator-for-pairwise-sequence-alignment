import {Component, OnInit} from '@angular/core';
import {HttpEventType} from '@angular/common/http';
import {DialignService} from '../../services/dialign.service';
import * as FastaFileReader from 'bionode-fasta';
import * as Fasta from 'biojs-io-fasta';
import {MsaSharingService} from '../../services/msa-sharing.service';

@Component({
  selector: 'app-dialign',
  templateUrl: './dialign.component.html',
  styleUrls: ['./dialign.component.css'],
  providers: [DialignService]
})
export class DialignComponent implements OnInit {

  title = 'Dialign';

  constructor(public msasharingService: MsaSharingService) {
  }

  ngOnInit() {
    this.msasharingService.setVisibility(false);
  }

}
