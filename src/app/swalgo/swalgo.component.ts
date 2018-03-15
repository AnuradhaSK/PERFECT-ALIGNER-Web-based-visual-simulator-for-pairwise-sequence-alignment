import {Component, OnInit} from '@angular/core';
import {SharingService} from '../services/sharing.service';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-swalgo',
  templateUrl: './swalgo.component.html',
  styleUrls: ['./swalgo.component.css']
})
export class SwalgoComponent implements OnInit {
  title = 'smith-waterman';
  dataArray: any;

  constructor(protected sharingService: SharingService) {
  }

  ngOnInit() {
    this.sharingService.setVisibility(false);

  }
 // this.dataArrived.subscribe(this.sharingService.getVisibility());

}
