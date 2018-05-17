import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import { SCHEMES} from '../../../models/colorscheme';
import swal from "sweetalert2";


@Component({
  selector: 'app-dialign-panel',
  templateUrl: './dialign-panel.component.html',
  styleUrls: ['./dialign-panel.component.css']
})

export class DialignPanelComponent implements OnInit {
  geneArray: any;
  maxlength: number;
  width: any;
  scheme = 'ClustalW';
  colorSchemes = SCHEMES;
  obj: any;
  colorArray: any;

  constructor(protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
    this.geneArray = this.msasharingService.getPanelData();
    swal.close();
  }


  // return sequence data to create pannel
  getSequenceData() {
    for (let x of this.colorSchemes) {
      if (x.name === this.scheme) {
        this.obj = x;
        this.colorArray = x.colors;
        console.log(this.colorArray);
      }
    }
    for (let x of this.colorSchemes) {
      if (x.name === this.scheme) {
        this.obj = x;
      }
    }
    this.maxlength = 0;
    let max = [];
    for (let i in this.geneArray) {
      if (this.maxlength < this.geneArray[i].sequence.split('').length) {
        this.maxlength = this.geneArray[i].sequence.split('').length;
        max = this.geneArray[i].sequence.split('');
      }
    }
    console.log(this.maxlength);
    this.calWidth();
    return max;

  }

  // calculate the width of the pannel
  calWidth() {
    this.width = 100 + 20 * this.maxlength;
  }

  // return color for each character according to the color scheme
  getColor(character) {
    return this.colorArray[character];
  }

}

