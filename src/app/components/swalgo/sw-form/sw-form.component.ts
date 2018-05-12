import {Component, OnInit} from '@angular/core';
import {SharingService} from '../../../services/sharing.service';
import {SwalgoService} from '../../../services/swalgo.service';
import swal from 'sweetalert2';

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

  constructor(protected sharingService: SharingService,
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
    this.showLoading();
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
    this.swalgoService._get(this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap).subscribe((data) => {
      this.dataArray = data;
      this.sharingService.setData(this.dataArray, this.stringOne, this.stringTwo, this.match, this.mismatch, this.gap);
      this.sharingService.setVisibility(true);
      this.closeLoading();
      console.log(this.dataArray);
    });
  }

  // waiting alert on
  showLoading() {
    swal({
      title: 'Please Wait!',
      text: 'Your request is processing',
      onOpen: () => {
        swal.showLoading();
      }
    });
  }

  // waiting alert off
  closeLoading() {
    swal.close();
  }
}
