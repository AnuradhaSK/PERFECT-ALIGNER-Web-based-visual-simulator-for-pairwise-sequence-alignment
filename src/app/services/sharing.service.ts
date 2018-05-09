import {Injectable} from '@angular/core';

@Injectable()
export class SharingService {

  constructor() {
  }

  public data: any = undefined;
  public strinOne: string;
  public stringTwo: string;
  public match: string;
  public mismatch: string;
  public gap: string;
  public visible: boolean;

  setData(data: any, stringOne: string, stringTwo: string, match: string, mismatch: string, gap: string) {
    this.data = data;
    this.strinOne = stringOne;
    this.stringTwo = stringTwo;
    this.match = match;
    this.mismatch = mismatch;
    this.gap = gap;
  }


  setVisibility(visible: boolean) {
    this.visible = visible;
  }

  getVisibility(): boolean {
    return this.visible;
  }

  getData(): any {
    return this.data;
  }

  getStringOne(): string {
    return this.strinOne;
  }

  getStringTwo(): string {
    return this.stringTwo;
  }

  getMatch(): string {
    return this.match;
  }

  getMismatch(): string {
    return this.mismatch;
  }

  getGap(): string {
    return this.gap;
  }
}
