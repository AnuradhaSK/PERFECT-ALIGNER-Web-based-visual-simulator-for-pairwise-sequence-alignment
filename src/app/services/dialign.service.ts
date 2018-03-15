import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DialignService {

  constructor(protected http: HttpClient) { }

  public _get() {
    return this.http.get('http://localhost:8080/perfectaligner/dialign?').map(res => res);
  }
}
