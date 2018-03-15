import {Injectable} from '@angular/core';

@Injectable()
export class SharingService {

  constructor() {
  }

  private data: any = undefined;
  private strinOne: string;
  private stringTwo: string;
  private visible: boolean;

  setData(data: any, stringOne: string, stringTwo: string) {
    this.data = data;
    this.strinOne = stringOne;
    this.stringTwo = stringTwo;
    console.log('came to sharing');
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
}
