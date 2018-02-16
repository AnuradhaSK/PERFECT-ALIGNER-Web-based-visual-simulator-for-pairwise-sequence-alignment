import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nwalgo',
  templateUrl: './nwalgo.component.html',
  styleUrls: ['./nwalgo.component.css']
})
export class NwalgoComponent implements OnInit {
  title = 'needleman-wunsch';
  btnText = 'Align';
  Stringone: ' ';
  Stringtwo: ' ';
  Null: '';
  coulmns: number;
  String1array = [];
  String2array = [];
  constructor(

  ) {

  }

  ngOnInit() {
    this.coulmns = 0;
  }

  showGrid() {
    this.Stringone = this.Stringone;
    this.String1array = this.Stringone.split('', this.Stringone.length);
    this.Stringtwo = this.Stringtwo;
    this.String2array = this.Stringtwo.split('', this.Stringtwo.length);
    this.coulmns = this.Stringone.length + 2;
  }

}
