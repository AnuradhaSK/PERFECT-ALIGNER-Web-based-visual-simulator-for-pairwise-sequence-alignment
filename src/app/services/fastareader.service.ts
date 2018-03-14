import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class FastareaderService {

  constructor() {
  }

  public fileReader(e) {
    const file = e.target.files[0];
    const pattern = /fasta-*/;

    if (!file.type.match(pattern)) {
      alert('This is not in fasta format. Please load a fasta file');
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return Observable.create(observer => {
      reader.onloadend = () => {
        observer.next(reader.result);
        observer.complete();
      };
    });
  }
}
