import {Component, OnInit} from '@angular/core';
import {MsaSharingService} from '../../../services/msa-sharing.service';

@Component({
  selector: 'app-dialign-chart',
  templateUrl: './dialign-chart.component.html',
  styleUrls: ['./dialign-chart.component.css']
})
export class DialignChartComponent implements OnInit {

  constructor(protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
  }

  // chart details
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
