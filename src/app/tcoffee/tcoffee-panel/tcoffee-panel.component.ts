import { Component, OnInit } from '@angular/core';
import {MsaSharingService} from '../../services/msa-sharing.service';
import {TcoffeeService} from '../../services/tcoffee.service';

@Component({
  selector: 'app-tcoffee-panel',
  templateUrl: './tcoffee-panel.component.html',
  styleUrls: ['./tcoffee-panel.component.css']
})
export class TcoffeePanelComponent implements OnInit {
  geneArray: any;
  constructor(protected tcoffeeService: TcoffeeService,
 protected msasharingService: MsaSharingService) { }

  ngOnInit() {
    this.geneArray = this.msasharingService.getPanelData();
  }

  // get the maximum length sequence
  getMaxSequenceLength() {
    let maxlength = 0;
    let max = [];
    for (let i in this.geneArray) {
      if (maxlength < this.geneArray[i].sequence.split('').length) {
        maxlength = this.geneArray[i].sequence.split('').length;
        max = this.geneArray[i].sequence.split('');
      }
    }
    console.log(maxlength);
    return max;

  }

}
