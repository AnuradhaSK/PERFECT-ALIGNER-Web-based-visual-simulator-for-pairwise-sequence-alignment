import {Injectable} from '@angular/core';

@Injectable()
export class SharingService {

  constructor() {
  }

  private data: any = undefined;
  private strinOne: string;
  private stringTwo: string;

  setData(data: any, stringOne: string, stringTwo: string) {
    this.data = data;
    this.strinOne = stringOne;
    this.stringTwo = stringTwo;
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
}
