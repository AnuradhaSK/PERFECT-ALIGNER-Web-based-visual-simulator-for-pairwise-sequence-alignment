import {Component, Input, OnInit} from '@angular/core';
import {DialignService} from '../../../services/dialign.service';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {Colorscheme, SCHEMES} from '../../../models/colorscheme';
import swal from 'sweetalert2';

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
  chartDataArray: any;

  constructor(protected dialignService: DialignService,
              protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
  }


  // choose file
  fileChanged(e) {
    this.file = e.target.files[0];
  }

  // upload and read the file
  uploadDocument(file) {
    // waiting alert on
    this.showLoading();
    this.msasharingService.setVisibility(false);
    // read file
    let fileReader = new FileReader();
    fileReader.readAsText(this.file);
    fileReader.onload = (e) => {
      this.dataArray = fileReader.result.split('\n');
      this.geneArray = this.dialignService.getGeneArray(this.dataArray);

      this.msasharingService.setPanelData(this.geneArray);
      this.chartDataArray = this.dialignService.alignedCharCount(this.geneArray);
      this.msasharingService.setChartData(this.chartDataArray);
      // visualize if the file is a fasta file
      if (!(this.msasharingService.getPanelData().length === 1 && this.msasharingService.getPanelData()[0].id === '')) {
        this.closeLoading();
        this.msasharingService.setVisibility(true);
      }
      // show an error message if the file is not in fasta format
      else {
        this.closeLoading();
        this.showError();

      }

    };
  }

  // instruction alert
  showHelpBox() {
    swal({
      title: '<i>Help</i>',
      type: 'info',
      html:
      'Choose a <b>Fasta file</b> which contains dialigned sequences.' + '<br>' +
      'Then click <b>Upload button</b> to see the simulation.' + '<br>' +
      'If you do not have such file' + '<br>' +
      'Visit :<a href="http://dialign.gobics.de/">Dialign Server</a> ' + '<br>' +
      'to generate a dialigned fasta file',
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

  // show waiting alert
  showLoading() {
    swal({
      title: 'Please Wait!',
      text: 'your request is processing',
      onOpen: () => {
        swal.showLoading();
      }
    });
  }

  // close alert
  closeLoading() {
    swal.close();
  }

  // show error alert
  showError() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Uploaded file is not in FASTA format!',
    });
  }


}
