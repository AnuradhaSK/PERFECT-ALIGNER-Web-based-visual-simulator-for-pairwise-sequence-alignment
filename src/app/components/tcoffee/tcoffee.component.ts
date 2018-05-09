import { Component, OnInit } from '@angular/core';
import {MsaSharingService} from '../../services/msa-sharing.service';
import {TcoffeeService} from '../../services/tcoffee.service';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-tcoffee',
  templateUrl: './tcoffee.component.html',
  styleUrls: ['./tcoffee.component.css'],
  providers: [TcoffeeService]
})
export class TcoffeeComponent implements OnInit {

  title = 'T-coffee';
  constructor(public msasharingService: MsaSharingService) { }

  ngOnInit() {
    this.msasharingService.setVisibility(false);
  }

}
