import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Cell} from '../cell'; // import cell class
import {NwalgoService} from '../services/nwalgo.service';
import {SharingService} from '../services/sharing.service'; // import Nwalgoservice

@Component({
  selector: 'app-nwalgo',
  templateUrl: './nwalgo.component.html',
  styleUrls: ['./nwalgo.component.css'],
  providers: [NwalgoService]
})
export class NwalgoComponent implements OnInit {
  title = 'needleman-wunsch';
  showSpinner = false;
  constructor(protected sharingService: SharingService,
              protected nwalgoService: NwalgoService) {
  }

  ngOnInit() {
    this.sharingService.setVisibility(false);
  }

}

