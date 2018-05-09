import {Component, OnInit} from '@angular/core';

import {NwalgoService} from '../../services/nwalgo.service'; // import Nwalgoservice
import {SharingService} from '../../services/sharing.service';


@Component({
  selector: 'app-nwalgo',
  templateUrl: './nwalgo.component.html',
  styleUrls: ['./nwalgo.component.css'],
  providers: [NwalgoService]
})
export class NwalgoComponent implements OnInit {
  title = 'needleman-wunsch';

  constructor(public sharingService: SharingService) {
  }

  ngOnInit() {
    this.sharingService.setVisibility(false);
  }


}

