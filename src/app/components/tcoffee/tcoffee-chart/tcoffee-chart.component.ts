import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-tcoffee-chart',
  templateUrl: './tcoffee-chart.component.html',
  styleUrls: ['./tcoffee-chart.component.css']
})
export class TcoffeeChartComponent implements OnInit {

  constructor(protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = this.msasharingService.getIdArray();
  public barChartType: string = 'horizontalBar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: this.msasharingService.getChartData(), label: 'No of aligned characters'}
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
