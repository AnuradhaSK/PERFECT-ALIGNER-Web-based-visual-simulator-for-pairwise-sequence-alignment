import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {TcoffeeService} from '../../../services/tcoffee.service';

@Component({
  selector: 'app-tcoffee-menu',
  templateUrl: './tcoffee-menu.component.html',
  styleUrls: ['./tcoffee-menu.component.css']
})
export class TcoffeeMenuComponent implements OnInit {
  dataArray: any;
  geneArray: any;
  chartDataArray: any;
  file: any;
  message = '';

  constructor(protected tcoffeeService: TcoffeeService,
              protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
  }

  // choose a file
  fileChanged(e) {
    this.file = e.target.files[0];
    console.log(this.file);
  }

  // upload the file and read
  uploadDocument(file) {
    this.msasharingService.setVisibility(false);
    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = (e) => {
      this.dataArray = fileReader.result.split('\n');
      // console.log(this.dataArray);
      this.geneArray = this.tcoffeeService.getGeneArray(this.dataArray);
      this.msasharingService.setPanelData(this.geneArray);
      this.chartDataArray = this.tcoffeeService.alignedCharCount(this.geneArray);
      this.msasharingService.setChartData(this.chartDataArray);
      if (!(this.msasharingService.getPanelData().length === 1 && this.msasharingService.getPanelData()[0].id === '')) {
        this.msasharingService.setVisibility(true);
        this.message = '';
      } else {
        this.message = 'Sorry :( Uploaded file is not in FASTA format';
      }
    };

  }

}
