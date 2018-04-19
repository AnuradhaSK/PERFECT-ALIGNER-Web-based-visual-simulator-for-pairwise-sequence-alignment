import {Injectable} from '@angular/core';

@Injectable()
export class MsaSharingService {

  private geneArray: any;
  private chartDataArray: any;
  idArray: any;
  private schemeName: string;
  private visible: boolean;

  constructor() {
  }

  setPanelData(dataArray: any) {
    this.geneArray = dataArray;
  }

  getPanelData() {
    return this.geneArray;
  }

  getIdArray() {
    this.idArray = new Array();
    for (const gene of this.geneArray) {
      console.log(gene.id);
      this.idArray.push(gene.id.toString());
    }
    console.log(this.idArray.toString());
    return this.idArray;
  }

  setVisibility(visible: boolean) {
    this.visible = visible;
  }

  getVisibility(): boolean {
    return this.visible;
  }

  setScheme(schemeName: string) {
    this.schemeName = schemeName;
  }

  getScheme() {
    return this.schemeName;
  }

  setChartData(chartData) {
    this.chartDataArray = chartData;
  }

  getChartData() {
    return this.chartDataArray;
  }

}
