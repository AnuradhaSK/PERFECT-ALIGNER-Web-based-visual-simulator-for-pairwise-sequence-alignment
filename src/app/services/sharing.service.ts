import {Injectable} from '@angular/core';

@Injectable()
export class SharingService {

  constructor() {
  }

  private data: any = undefined;
  private strinOne: string;
  private stringTwo: string;
  private match: string;
  private mismatch: string;
  private gap: string;
  private visible: boolean;

  setData(data: any, stringOne: string, stringTwo: string, match: string, mismatch: string, gap: string) {
    this.data = data;
    this.strinOne = stringOne;
    this.stringTwo = stringTwo;
    this.match = match;
    this.mismatch = mismatch;
    this.gap = gap;
    // console.log('came to sharing');
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
