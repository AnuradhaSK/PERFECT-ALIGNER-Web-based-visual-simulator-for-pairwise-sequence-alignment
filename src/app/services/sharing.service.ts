import {Injectable} from '@angular/core';

@Injectable()
export class SharingService {

  constructor() {
  }

  public data: any = undefined;
  public stringOne: string;
  public stringTwo: string;
  public match: string;
  public mismatch: string;
  public gap: string;
  public visible: boolean;

  // set values get from form and aligned data
  setData(data: any, stringOne: string, stringTwo: string, match: string, mismatch: string, gap: string) {
    this.data = data;
    this.stringOne = stringOne;
    this.stringTwo = stringTwo;
    this.match = match;
    this.mismatch = mismatch;
    this.gap = gap;
  }


  // set the visibility of grid component
  setVisibility(visible: boolean) {
    this.visible = visible;
  }

  // return visibility
  getVisibility(): boolean {
    return this.visible;
  }

  // return aligned data
  getData(): any {
    return this.data;
  }

  // return the string one
  getStringOne(): string {
    return this.stringOne;
  }

  // return the string two
  getStringTwo(): string {
    return this.stringTwo;
  }

  // return the match value
  getMatch(): string {
    return this.match;
  }

  // return the mismatch value
  getMismatch(): string {
    return this.mismatch;
  }

  // return the gap value
  getGap(): string {
    return this.gap;
  }
}
