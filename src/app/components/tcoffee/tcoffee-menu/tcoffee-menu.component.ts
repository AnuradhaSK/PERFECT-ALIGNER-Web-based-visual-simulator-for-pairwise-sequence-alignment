import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {TcoffeeService} from '../../../services/tcoffee.service';
import swal from 'sweetalert2';

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
  showLoading() {
    swal({
      title: 'Please Wait!',
      text: 'your request is processing',
      onOpen: () => {
        swal.showLoading();
      }});
  }
  closeLoading() {
    swal.close();
  }

  showError() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Uploaded file is not in FASTA format!',
    });
  }
  // choose a file
  fileChanged(e) {
    this.file = e.target.files[0];
    console.log(this.file);
  }

  // upload the file and read
  uploadDocument(file) {
    this.showLoading();
    this.msasharingService.setVisibility(false);
    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = (e) => {
      this.dataArray = fileReader.result.split('\n');
      this.geneArray = this.tcoffeeService.getGeneArray(this.dataArray);
      this.msasharingService.setPanelData(this.geneArray);
      this.chartDataArray = this.tcoffeeService.alignedCharCount(this.geneArray);
      this.msasharingService.setChartData(this.chartDataArray);
      if (!(this.msasharingService.getPanelData().length === 1 && this.msasharingService.getPanelData()[0].id === '')) {
        this.closeLoading();
        this.msasharingService.setVisibility(true);
        this.message = '';
      } else {
        this.closeLoading();
        this.showError();
      }
    };

  }



}
