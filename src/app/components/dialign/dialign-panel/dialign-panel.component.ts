import {Component, OnInit} from '@angular/core';
import {DialignService} from '../../../services/dialign.service';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import { SCHEMES} from '../../../models/colorscheme';


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
  }


  getMaxSequenceLength() {
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

  calWidth() {
    this.width = 100 + 20 * this.maxlength;
  }

  getColor(character) {
    console.log(typeof(character));
    // console.log(this.colorArray);
    console.log(this.colorArray[character]);
    return this.colorArray[character];
  }

}

