import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SwalgoService {

  constructor(protected http: HttpClient) { }

  // return the grid values from backend
  public _get(Stringone: string, Stringtwo: string, match: string, mismatch: string, gap: string) {
    console.log('came to sw service');
    return this.http.get('https://perfectaligner.herokuapp.com/smithwaterman?sequence1='.concat(Stringone.toUpperCase()) +
      '&sequence2='.concat(Stringtwo.toUpperCase()) + '&match='.concat(match) + '&mismatch='.concat(mismatch) + '&gap='.concat(gap))
      .map(res => res);
  }

}
