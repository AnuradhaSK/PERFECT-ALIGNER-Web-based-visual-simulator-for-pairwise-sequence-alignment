import {Component, OnInit} from '@angular/core';
import {SharingService} from '../../services/sharing.service';


@Component({
  selector: 'app-swalgo',
  templateUrl: './swalgo.component.html',
  styleUrls: ['./swalgo.component.css']
})
export class SwalgoComponent implements OnInit {
  title = 'smith-waterman';
  showSpinner = false;

  constructor(protected sharingService: SharingService) {
  }

  ngOnInit() {
    this.sharingService.setVisibility(false);

  }

}
