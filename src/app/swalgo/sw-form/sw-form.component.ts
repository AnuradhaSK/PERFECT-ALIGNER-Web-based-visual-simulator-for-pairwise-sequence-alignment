import {Component, OnInit} from '@angular/core';
import {SharingService} from '../../services/sharing.service';
import {SwalgoService} from '../../services/swalgo.service';

@Component({
  selector: 'app-sw-form',
  templateUrl: './sw-form.component.html',
  styleUrls: ['./sw-form.component.css'],
  providers: [SwalgoService]
})
export class SwFormComponent implements OnInit {
  stringOne: string;
  stringTwo: string;
  btnText = 'Align';
  match: '';
  mismatch: '';
  gap: '';
  alignStop: boolean;
  dataArray: any;
  submitted = false;

  constructor(private sharingService: SharingService,
              protected swalgoService: SwalgoService) {
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
    }, 2000);
    this.sharingService.setData(this.dataArray, this.stringOne, this.stringTwo);
    this.alignStop = true;
    console.log(this.dataArray);
  }

  // call the service
  public _get() {
    this.swalgoService._get(this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap).subscribe((data) => {
      this.dataArray = data;
    });
  }
}
