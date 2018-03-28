import {Component, OnInit} from '@angular/core';
import {SharingService} from '../../../services/sharing.service';
import {NwalgoService} from '../../../services/nwalgo.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-nw-form',
  templateUrl: './nw-form.component.html',
  styleUrls: ['./nw-form.component.css'],
  providers: [NwalgoService]
})

export class NwFormComponent implements OnInit {
  stringOne: string;
  stringTwo: string;
  btnText = 'Align';
  match: '';
  mismatch: '';
  gap: '';
  alignStop: boolean;
  dataArray: any;
  submitted = false;

  constructor(protected sharingService: SharingService,
              protected nwalgoService: NwalgoService) {
  }

  ngOnInit() {
    this.submitted = false;
  }

  onSubmit() {
    this.submitted = true;
  }

  // This method is called when the align button clicks
  showGrid() {
    this.stringOne = this.stringOne.toUpperCase();
    this.stringTwo = this.stringTwo.toUpperCase();
    this.match = this.match;
    this.mismatch = this.mismatch;
    this.gap = this.gap;
    setTimeout(() => {
      this._get();
    }, 3000);
    this.alignStop = true;
    this.onSubmit();
  }

  // call the service
  public _get() {
    this.nwalgoService._get(this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap).subscribe((data) => {
      this.dataArray = data;
      this.sharingService.setData(this.dataArray, this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap);
      this.sharingService.setVisibility(true);
      console.log(this.dataArray);
    });
  }

}
