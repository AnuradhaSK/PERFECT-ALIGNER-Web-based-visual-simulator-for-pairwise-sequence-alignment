import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Cell} from '../cell'; // import cell class

@Component({
  selector: 'app-nwalgo',
  templateUrl: './nwalgo.component.html',
  styleUrls: ['./nwalgo.component.css']
})
export class NwalgoComponent implements OnInit {
  title = 'needleman-wunsch';
  btnText = 'Align';
  stepBtn = 'NextStep';
  finalBtn = 'FinalAlignment';
  clearBtn = 'Clear';
  Stringone: string;
  Stringtwo: string;
  columns: number;
  String1array = [];
  String2array = [];
  StringOffsetArray = ['', ''];
  colCount = 0;
  rowCount = 0;
  gridArray: Cell[][];
  nextRowIndex = 2;
  nextColIndex = 2;
  nextDataArrayIndex = 0;
  dataArray: any;
  alignStop: boolean;
  stepStop = true;
  finalStop = true;
  final: boolean;
  match: '';
  mismatch: '';
  gap: '';
  str: any;
  private xmlHttp: XMLHttpRequest;
  resSeq1: ' ';
  resSeq2: ' ';
  showSpinner = false;
  submitted = false;
  resSeq1Array = [];
  resSeq2Array = [];

  constructor() {
  }

  ngOnInit() {
    this.columns = 0;
  }

  httpGet(theUrl) {
    this.xmlHttp = new XMLHttpRequest();
    this.xmlHttp.open('GET', theUrl, false); // false for synchronous request
    this.xmlHttp.send(null);
    return this.xmlHttp.responseText;
  }

  onSubmit() {
    this.submitted = true;
  }

  // This method is called when the align button clicks
  showGrid() {
    this.showSpinner = true;
    this.nextDataArrayIndex = 0;
    this.Stringone = this.Stringone.toUpperCase();
    this.Stringtwo = this.Stringtwo.toUpperCase();
    this.String1array = this.StringOffsetArray.concat(this.Stringone.split('', this.Stringone.length));
    this.String2array = this.StringOffsetArray.concat(this.Stringtwo.split('', this.Stringtwo.length));
    this.columns = this.Stringone.length + 2;
    this.match = this.match;
    this.mismatch = this.mismatch;
    this.gap = this.gap;
    this.rowCount = this.Stringtwo.length + 2;
    this.colCount = this.Stringone.length + 2;
    this.stepStop = false;
    this.finalStop = false;
    this.createGridArray();
    setTimeout(() => {

      this.str = this.httpGet('http://localhost:8080/perfectaligner/test?sequence1=' + this.Stringone.toUpperCase() +
        '&sequence2=' + this.Stringtwo.toUpperCase() +
        '&match=' + this.match + '&mismatch=' + this.mismatch + '&gap=' + this.gap);
      this.dataArray = JSON.parse(this.str);
      this.showSpinner = false;
    }, 2000);
    console.log(this.str);
    this.alignStop = true;
  }

  createGridArray() {
    this.gridArray = [];
    for (let r = 0; r < this.rowCount; r++) {
      this.gridArray[r] = [];
      for (let co = 0; co < this.colCount; co++) {
        if ((co === 0 && r === 0) || (co === 0 && r === 1) || (co === 1 && r === 0)) {
          this.gridArray[r][co] = new Cell();
          continue;
        }
        this.gridArray[r][co] = new Cell();
      }
    }
    for (let co = 2; co < this.colCount; co++) {
      this.gridArray[0][co].cellvalue = this.String1array[co];
    }
    for (let r = 2; r < this.rowCount; r++) {
      this.gridArray[r][0].cellvalue = this.String2array[r];
    }
    this.gridArray[1][1].cellvalue = '0';
    for (let cp = 2; cp < this.colCount; cp++) {
      this.gridArray[1][cp].cellvalue = (parseInt(this.gap, 10) * (cp - 1)).toString();
    }
    for (let rp = 2; rp < this.rowCount; rp++) {
      this.gridArray[rp][1].cellvalue = (parseInt(this.gap, 10) * (rp - 1)).toString();
    }
  }

  // next step button function
  nextStep() {
    console.log('Implement next step');
    // reset exisiting colors
    this.resetColor();
    // update the next step values,colors
    this.updateMatrix(this.nextRowIndex, this.nextColIndex, this.dataArray[this.nextDataArrayIndex].score,
      this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
    if (this.nextColIndex + 1 < this.colCount) {
      this.nextColIndex += 1;
    } else {
      this.nextColIndex = 2;
      this.nextRowIndex += 1;
    }
    this.nextDataArrayIndex += 1;
    if (this.nextDataArrayIndex === this.Stringone.length * this.Stringtwo.length) {
      console.log('Next step came to final');
      this.stepStop = true;
    }
  }

  // reset colors of cells
  resetColor() {
    for (const row of this.gridArray) {
      for (const col of row) {
        col.color = false;
        col.datacolor = false;
        col.refcolor = false;
      }
    }
  }

  // update the next step values,colors
  updateMatrix(row, col, val, prerow, precol) {
    this.gridArray[row][col].cellvalue = val;
    this.gridArray[0][col].color = true;
    this.gridArray[row][0].color = true;
    this.gridArray[row][col].datacolor = true;
    this.gridArray[prerow][precol].refcolor = true;
  }

  // final button's function
  finalResult() {
    this.resetColor();
    this.fillin();
    for (let x = this.Stringone.length * this.Stringtwo.length; x < this.dataArray.length - 1; x++) {
      this.colorTraceback(x);
    }
    this.final = true;
    this.resSeq1 = this.dataArray[this.dataArray.length - 1].sequence1;
    this.resSeq2 = this.dataArray[this.dataArray.length - 1].sequence2;
    this.resSeq1Array = this.resSeq1.split('', this.resSeq1.length);
    this.resSeq2Array = this.resSeq2.split('', this.resSeq2.length);
    console.log(this.resSeq1);
    console.log(this.resSeq2);
  }

  fillin() {
    let count = 0;
    for (let i = 2; i < this.Stringone.length + 2; i++) {
      for (let j = 2; j < this.Stringtwo.length + 2; j++) {
        this.gridArray[i][j].cellvalue = this.dataArray[count].score;
        console.log(count);
        console.log('Score:' + this.dataArray[count].score);
        count += 1;
      }
    }
  }

  // color cells related to final simulation
  colorTraceback(x) {
    this.gridArray[this.dataArray[x].row + 1][this.dataArray[x].col + 1].datacolor = true;
  }

  // clear button's function
  clearall() {
    location.reload();
  }


}

