import {Component, OnInit} from '@angular/core';
import {DialignService} from '../../services/dialign.service';
import {MsaSharingService} from '../../services/msa-sharing.service';

@Component({
  selector: 'app-dialign-menu',
  templateUrl: './dialign-menu.component.html',
  styleUrls: ['./dialign-menu.component.css']
})
export class DialignMenuComponent implements OnInit {
  dataArray: any;
  geneArray: any;
  file: any;
  message = '';

  constructor(protected dialignService: DialignService,
              protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
  }

  fileChanged(e) {
    this.file = e.target.files[0];
  }

  uploadDocument(file) {
    this.msasharingService.setVisibility(false);
    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = (e) => {
      this.dataArray = fileReader.result.split('\n');
      // console.log(this.dataArray);
      this.geneArray = this.dialignService.getGeneArray(this.dataArray);
      this.msasharingService.setPanelData(this.geneArray);
      if (!(this.msasharingService.getPanelData().length === 1 && this.msasharingService.getPanelData()[0].id === '')) {
        this.msasharingService.setVisibility(true);
        this.message = '';
      } else {
        this.message = 'Sorry :( Uploaded file is not in FASTA format';
      }

    };

  }

}
