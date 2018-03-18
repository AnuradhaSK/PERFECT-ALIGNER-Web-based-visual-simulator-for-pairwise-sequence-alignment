import {Component, OnInit} from '@angular/core';
import {Cell} from '../../cell';
import {SharingService} from '../../services/sharing.service';

@Component({
  selector: 'app-nw-grid',
  templateUrl: './nw-grid.component.html',
  styleUrls: ['./nw-grid.component.css']
})
export class NwGridComponent implements OnInit {

  stepBtn = 'NextStep';
  backBtn = 'PreviousStep';
  finalBtn = 'FinalAlignment';
  clearBtn = 'Clear';
  dataArray: any;
  stepStop = false;
  finalStop = false;
  String1array = [];
  String2array = [];
  StringOffsetArray = ['', ''];
  colCount = 0;
  rowCount = 0;
  gridArray: Cell[][];
  nextRowIndex = 2;
  nextColIndex = 2;
  columns: number;
  stringOne: string;
  stringTwo: string;
  resSeq1: ' ';
  resSeq2: ' ';
  noback = true;
  final: boolean;
  resSeq1Array = [];
  resSeq2Array = [];
  nextDataArrayIndex = 0;

  constructor(private sharingService: SharingService) {
  }

  ngOnInit() {
    this.dataArray = this.sharingService.getData();
    this.stringOne = this.sharingService.getStringOne();
    this.stringTwo = this.sharingService.getStringTwo();
    this.String1array = this.StringOffsetArray.concat(this.stringOne.split('', this.stringOne.length));
    this.String2array = this.StringOffsetArray.concat(this.stringTwo.split('', this.stringTwo.length));
    this.columns = this.stringOne.length + 2;
    this.rowCount = this.stringTwo.length + 2;
    this.colCount = this.stringOne.length + 2;
    this.createGridArray();
  }

  createGridArray() {
    console.log('come to create grid array');
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
      this.gridArray[1][cp].cellvalue = (parseInt('0', 10) * (cp - 1)).toString();
    }
    for (let rp = 2; rp < this.rowCount; rp++) {
      this.gridArray[rp][1].cellvalue = (parseInt('0', 10) * (rp - 1)).toString();
    }
    console.log('created grid');
  }

  // next step button function
  nextStep() {
    this.noback = false;
    console.log('next step ' + this.nextDataArrayIndex + 'next row ' + this.nextRowIndex + 'next col ' + this.nextColIndex);
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
    if (this.nextDataArrayIndex === this.stringOne.length * this.stringTwo.length) {
      console.log('Next step came to final');
      this.stepStop = true;
      this.resetColor();
    }
  }

  // functionality of the previous step
  previousStep() {
    this.stepStop = false;
    this.nextDataArrayIndex -= 1;
    if (this.nextDataArrayIndex < 1) {
      this.noback = true;
    }
    if (this.nextColIndex - 1 < 2) {
      this.nextColIndex = this.colCount - 1;
      this.nextRowIndex -= 1;
    } else {
      this.nextColIndex -= 1;
    }
    console.log('previous step ' + this.nextDataArrayIndex + 'next row ' + this.nextRowIndex + 'next col ' + this.nextColIndex);
    this.undoMatrix(this.nextRowIndex, this.nextColIndex, '',
      this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
  }

  undoMatrix(row, col, val, prerow, precol) {

    this.gridArray[row][col].cellvalue = val;
    this.gridArray[0][col].color = false;
    this.gridArray[row][0].color = false;
    this.gridArray[row][col].datacolor = false;
    this.gridArray[prerow][precol].refcolor = false;
    if (this.nextDataArrayIndex > 0) {
      let point;
      point = this.dataArray[this.nextDataArrayIndex - 1];
      this.gridArray[0][point.col + 1].color = true;
      this.gridArray[point.row + 1][0].color = true;
      this.gridArray[point.row + 1][point.col + 1].datacolor = true;
      this.gridArray[point.preRow + 1][point.preCol + 1].refcolor = true;
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
    this.nextDataArrayIndex = this.stringOne.length * this.stringTwo.length;
    this.stepStop = true;
    this.noback = true;
    this.resetColor();
    this.fillin();
    for (let x = this.stringOne.length * this.stringTwo.length; x < this.dataArray.length - 1; x++) {
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

  // fill all values in the grid
  fillin() {
    let count = 0;
    console.log(this.String1array.length);
    console.log(this.String2array.length);
    for (let i = 2; i < this.String2array.length; i++) {
      for (let j = 2; j < this.String1array.length; j++) {
        this.gridArray[i][j].cellvalue = this.dataArray[count].score;
        console.log(count + ' ' + i + ' ' + j);
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
