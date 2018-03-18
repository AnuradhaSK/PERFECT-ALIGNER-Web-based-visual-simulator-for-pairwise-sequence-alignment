import { Component, OnInit } from '@angular/core';
import {MsaSharingService} from '../../services/msa-sharing.service';
import {TcoffeeService} from '../../services/tcoffee.service';

@Component({
  selector: 'app-tcoffee-menu',
  templateUrl: './tcoffee-menu.component.html',
  styleUrls: ['./tcoffee-menu.component.css']
})
export class TcoffeeMenuComponent implements OnInit {
  dataArray: any;
  geneArray: any;
  file: any;
  constructor(protected tcoffeeService: TcoffeeService,
              protected msasharingService: MsaSharingService) { }

  ngOnInit() {
  }
  fileChanged(e) {
    this.file = e.target.files[0];
  }

  uploadDocument(file) {
    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = (e) => {
      this.dataArray = fileReader.result.split('\n');
      // console.log(this.dataArray);
      this.geneArray = this.tcoffeeService.getGeneArray(this.dataArray);
      this.msasharingService.setPanelData(this.geneArray);
      this.msasharingService.setVisibility(true);
    };

  }

}
