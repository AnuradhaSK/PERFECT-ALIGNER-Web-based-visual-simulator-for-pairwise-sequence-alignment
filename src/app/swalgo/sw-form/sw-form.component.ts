import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sw-form',
  templateUrl: './sw-form.component.html',
  styleUrls: ['./sw-form.component.css']
})
export class SwFormComponent implements OnInit {
  Stringone: '';
  Stringtwo: '';
  btnText = 'Align';
  match: '';
  mismatch: '';
  gap: '';
  alignStop: boolean;
  constructor() { }

  ngOnInit() {
  }

}
