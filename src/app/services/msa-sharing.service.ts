import {Injectable} from '@angular/core';

@Injectable()
export class MsaSharingService {

  private geneArray: any;
  private visible: boolean;

  constructor() {
  }

  setPanelData(dataArray: any) {
    this.geneArray = dataArray;
  }

  getPanelData() {
    return this.geneArray;
  }

  setVisibility(visible: boolean) {
    this.visible = visible;
  }

  getVisibility(): boolean {
    return this.visible;
  }

}
