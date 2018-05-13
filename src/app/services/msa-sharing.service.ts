import {Injectable} from '@angular/core';

@Injectable()
export class MsaSharingService {

  geneArray: any;
  chartDataArray: any;
  idArray: any;
  schemeName: string;
  visible: boolean;

  constructor() {
  }

  // set gene arrays to be used for pannel
  setPanelData(dataArray: any) {
    this.geneArray = dataArray;
  }

  // return gene arrays to be used for pannel
  getPanelData() {
    return this.geneArray;
  }

  // returns id of sequences
  getIdArray() {
    this.idArray = new Array();
    for (const gene of this.geneArray) {
      this.idArray.push(gene.id.toString());
    }
    return this.idArray;
  }

  // set visibility true/false
  setVisibility(visible: boolean) {
    this.visible = visible;
  }

  // return visibility
  getVisibility(): boolean {
    return this.visible;
  }

  // set color scheme
  setScheme(schemeName: string) {
    this.schemeName = schemeName;
  }

  // retun color scheme
  getScheme() {
    return this.schemeName;
  }

  // set data to be used in chart
  setChartData(chartData) {
    this.chartDataArray = chartData;
  }

  // return chart data
  getChartData() {
    return this.chartDataArray;
  }


}
