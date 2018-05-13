import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {TcoffeeService} from '../../../services/tcoffee.service';
import {SCHEMES} from '../../../models/colorscheme';
import swal from "sweetalert2";

@Component({
  selector: 'app-tcoffee-panel',
  templateUrl: './tcoffee-panel.component.html',
  styleUrls: ['./tcoffee-panel.component.css']
})
export class TcoffeePanelComponent implements OnInit {
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

  // get the maximum length sequence
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

  // clacluate the width of pannel
  calWidth() {
    this.width = 100 + 20 * this.maxlength;
  }


  // return the color of each character according to the color scheme
  getColor(character) {
    console.log(typeof(character));
    console.log(this.colorArray[character]);
    return this.colorArray[character];

  }

}
