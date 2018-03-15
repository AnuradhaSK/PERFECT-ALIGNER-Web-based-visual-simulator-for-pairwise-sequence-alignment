import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';


@Injectable()
export class FastareaderService {

  constructor(protected http: HttpClient) {
  }

  /*public fileReader(e) {
    const file = e.target.files[0];
    const pattern = /fasta-*/
  /*;

   /* if (!file.type.match(pattern)) {
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

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData;
    formdata = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', '/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles() {
    return this.http.get('/getallfiles');
  }*/
}
