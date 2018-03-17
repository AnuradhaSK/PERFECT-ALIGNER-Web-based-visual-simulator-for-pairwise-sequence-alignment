import { Component, OnInit } from '@angular/core';
import {DialignService} from '../../services/dialign.service';
import {MsaSharingService} from '../../services/msa-sharing.service';

@Component({
  selector: 'app-dialign-panel',
  templateUrl: './dialign-panel.component.html',
  styleUrls: ['./dialign-panel.component.css']
})
export class DialignPanelComponent implements OnInit {
   geneArray: any;

  constructor(protected dialignService: DialignService,
              protected msasharingService: MsaSharingService) { }

  ngOnInit() {
    this.geneArray = this.msasharingService.getPanelData();
  }

}
