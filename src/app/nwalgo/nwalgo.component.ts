import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nwalgo',
  templateUrl: './nwalgo.component.html',
  styleUrls: ['./nwalgo.component.css']
})
export class NwalgoComponent implements OnInit {
  tableable: HTMLElement;
  title = 'needleman-wunsch';
  btnText = 'Align';
  stepBtn = 'NextStep';
  finalBtn = 'FinalAlignment';
  clearBtn = 'Clear';
  Stringone: ' ';
  Stringtwo: ' ';
  Null: '';
  columns: number;
  String1array = [];
  String2array = [];
  row = 0;
  Finalarray = [[]];
  col = 0;
  table: any;
  newRow: any;

  constructor() {

  }

  ngOnInit() {
    this.columns = 0;
    this.Finalarray = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
  }

  showGrid() {
    this.Stringone = this.Stringone;
    this.String1array = this.Stringone.split('', this.Stringone.length);
    this.Stringtwo = this.Stringtwo;
    this.String2array = this.Stringtwo.split('', this.Stringtwo.length);
    this.columns = this.Stringone.length + 2;

    this.table =  document.getElementById('myTable');
    for (this.row ; this.row < this.Stringtwo.length + 2; this.row++) {
      console.log('new row');
      this.newRow = this.table.insertRow(this.row);
      if (this.row === 0 || this.row === 1) {
        if (this.row === 0 ) {
          for (this.col = 0; this.col < this.Stringone.length + 2; this.col++) {
            if (this.col === 0 || this.col === 1 ) {
              this.newRow.insertCell(this.col).innerHTML = 'null';
            } else {
              this.newRow.insertCell(this.col).innerHTML = this.String1array[this.col - 2];
            }
          }
        } else {
        for (this.col = 0; this.col < this.Stringone.length + 2; this.col++) {
            this.newRow.insertCell(this.col).innerHTML = 'null';
        }
        }
      } else {
        console.log('else row');
        for (this.col = 0; this.col < this.Stringone.length + 2; this.col++) {
          console.log('2 rows up');
          if (this.col === 0) {
            console.log('new column');
            this.newRow.insertCell(this.col).innerHTML = this.String2array[this.row - 2];
          } else {
            this.newRow.insertCell(this.col).innerHTML = 'null';
          }
        }
      }
    }
  }


  nextStep() {
    console.log('Implement next step');
    document.getElementById('myTable').rows[2].cells[2].innerHTML = '5';
    document.getElementById('myTable').rows[3].cells[3].innerHTML = '2';
  }

  clearall() {
  }

}
