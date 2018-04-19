import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {TcoffeeService} from '../../../services/tcoffee.service';
import * as Plotly from 'plotly.js';
import {Config, Data, Layout} from 'plotly.js';
import {linkHorizontal} from 'd3-shape';

@Component({
  selector: 'app-tcoffee-panel',
  templateUrl: './tcoffee-panel.component.html',
  styleUrls: ['./tcoffee-panel.component.css']
})
export class TcoffeePanelComponent implements OnInit {
  geneArray: any;
  maxlength: number;
  width: any;


  constructor(protected tcoffeeService: TcoffeeService,
              protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
    this.geneArray = this.msasharingService.getPanelData();
  }
  // get the maximum length sequence

  getMaxSequenceLength() {
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
    /*const y = [];
    for (let i = 0; i < 500; i ++) {
      y[i] = Math.random();
    }

   const data = [
      {
        y: y,
        type: 'histogram',
        marker: {
          color: 'pink',
        },
      }
    ];
    Plotly.newPlot('myDiv', data);*/
  }


  getColor(char) {
    switch (char) {
      case 'A':
      case 'C':
      case 'I':
      case 'L':
      case 'M':
      case 'F':
      case 'W':
      case 'V':
        return '#2E5DCB';
      case 'K':
      case 'R':
        return '#F92B17';
      case 'E':
      case 'D':
        return '#E817F9';
      case 'N':
      case 'Q':
      case 'S':
      case 'T':
        return '#63C318';
      case 'G':
        return '#FA9915';
      case 'P':
        return '#FAFA15';
      case 'H':
      case 'Y':
        return '#15FADB';
    }
  }

}
