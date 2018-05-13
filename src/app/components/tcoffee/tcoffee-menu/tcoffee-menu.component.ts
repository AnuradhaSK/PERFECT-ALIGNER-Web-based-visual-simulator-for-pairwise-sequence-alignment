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
      // read inputs line by line
      this.dataArray = fileReader.result.split('\n');
      // generate gene array from data
      this.geneArray = this.tcoffeeService.getGeneArray(this.dataArray);
      // set data need to be shown on pannel
      this.msasharingService.setPanelData(this.geneArray);
      // set data need to be shown in chart
      this.chartDataArray = this.tcoffeeService.alignedCharCount(this.geneArray);
      this.msasharingService.setChartData(this.chartDataArray);
      // if the input file is in correct format
      if (!(this.msasharingService.getPanelData().length === 1 && this.msasharingService.getPanelData()[0].id === '')) {
        // this.closeLoading();
        this.msasharingService.setVisibility(true);

      } else {
        this.closeLoading();
        this.showError();
      }
    };

  }

  // waiting alert on
  showLoading() {
    swal({
      title: 'Please Wait!',
      text: 'your request is processing',
      onOpen: () => {
        swal.showLoading();
      }});
  }

  // waiting alert close
  closeLoading() {
    swal.close();
  }

  // Show error when uploaded file is not in fasta format
  showError() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Uploaded file is not in FASTA format!',
    });
  }

  // show instructions
  showHelpBox() {
    swal({
      title: '<i>Help</i>',
      type: 'info',
      html:
      'Choose a <b>Fasta file</b> which contains aligned sequences using T-Coffee algorithm.' + '<br>' +
      'Then click <b>Upload File button</b> to see the simulation.' + '<br>' +
      'If you do not have such file' + '<br>' +
      'Visit :<a href="http://tcoffee.crg.cat/apps/tcoffee/index.html">T-Coffee Server</a> ' + '<br>' +
      'to align sequences and generate a fasta file',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Great!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down',
    });
  }



}
