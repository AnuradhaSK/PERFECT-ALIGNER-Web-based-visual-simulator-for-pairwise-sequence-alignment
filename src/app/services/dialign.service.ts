import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as Fasta from 'biojs-io-fasta';


@Injectable()
export class DialignService {
  p: any;

  constructor(protected http: HttpClient) {
  }

  public _get(file: File) {
    return this.http.get('http://localhost:8080/perfectaligner/dialign?file='.concat('C:/Users/sudu/Desktop/test.fasta.txt'))
      .map(res => res);
  }

  public reader() {
    this.p = Fasta.read('http://dialign.gobics.de/repository/DIALIGN-1435256264/sequences.fa');


    this.p.then(function (model) {
      console.log(model);
    }, function (err) {
      console.error('err happened during downloading', err);
    });
  }
}
