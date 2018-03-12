import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NwalgoService {

  constructor(protected http: HttpClient) {
  }

  public _get(Stringone: string, Stringtwo: string, match: string, mismatch: string, gap: string) {
    return this.http.get('http://localhost:8080/perfectaligner/test?sequence1='.concat(Stringone.toUpperCase()) +
      '&sequence2='.concat(Stringtwo.toUpperCase()) + '&match='.concat(match) + '&mismatch='.concat(mismatch) + '&gap='.concat(gap))
      .map(res => res);
  }

}
