import {Component, OnInit} from '@angular/core';
import {SharingService} from '../../../services/sharing.service';
import {Cell} from '../../../models/cell';
import swal from "sweetalert2";

@Component({
  selector: 'app-sw-grid',
  templateUrl: './sw-grid.component.html',
  styleUrls: ['./sw-grid.component.css']
})
export class SwGridComponent implements OnInit {

  stepBtn = 'Next Step';
  backBtn = 'Previous Step';
  finalBtn = 'Final Alignment';
  clearBtn = 'Clear Grid';
  reloadBtn = 'Go Back';
  reqBtn = 'Request';
  dataArray: any;
  stepStop = false;
  finalStop = false;
  columns: number;
  stringOne: string;
  stringTwo: string;
  requestedStep: number;
  noback = true;
  final: boolean;
  resSeq1: ' ';
  resSeq2: ' ';
  String1array = [];
  String2array = [];
  StringOffsetArray = ['D(0,0)', ''];
  colCount = 0;
  rowCount = 0;
  gridArray: Cell[][];
  nextRowIndex = 2;
  nextColIndex = 2;
  resSeq1Array = [];
  resSeq2Array = [];
  nextDataArrayIndex = 0;
  max: number;
  request: boolean;
  match = '';
  mismatch = '';
  gap = '';

  constructor(private sharingService: SharingService) {
  }

  ngOnInit() {
    this.createGridArray();
  }

  createGridArray() {
    this.String1array = [];
    this.String2array = [];
    this.StringOffsetArray = ['', ''];
    this.colCount = 0;
    this.rowCount = 0;
    this.nextRowIndex = 2;
    this.nextColIndex = 2;
    this.resSeq1Array = [];
    this.resSeq2Array = [];
    this.nextDataArrayIndex = 0;
    this.noback = true;
    this.stepStop = false;
    this.dataArray = this.sharingService.getData();
    this.stringOne = this.sharingService.getStringOne();
    this.stringTwo = this.sharingService.getStringTwo();
    this.match = this.sharingService.getMatch();
    this.mismatch = this.sharingService.getMismatch();
    this.gap = this.sharingService.getGap();
    this.String1array = this.StringOffsetArray.concat(this.stringOne.split('', this.stringOne.length));
    this.String2array = this.StringOffsetArray.concat(this.stringTwo.split('', this.stringTwo.length));
    this.columns = this.stringOne.length + 2;
    this.rowCount = this.stringTwo.length + 2;
    this.colCount = this.stringOne.length + 2;
    this.request = false;
    this.max = this.stringOne.length * this.stringTwo.length;
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
    this.gridArray[0][0].cellvalue = this.String1array[0];
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
    this.resetBackgrounds();
    // update the next step values,colors
    if (this.dataArray[this.nextDataArrayIndex].preRow != null) {
      this.updateMatrix(this.nextRowIndex, this.nextColIndex, this.dataArray[this.nextDataArrayIndex].score,
        this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
    } else {
      this.updateMatrixWithoutpre(this.nextRowIndex, this.nextColIndex, this.dataArray[this.nextDataArrayIndex].score);
    }
    this.nextDataArrayIndex += 1;
    this.selectImage(this.gridArray[this.nextRowIndex][this.nextColIndex]);
    if (this.nextColIndex + 1 < this.colCount) {
      this.nextColIndex += 1;
    } else {
      this.nextColIndex = 2;
      this.nextRowIndex += 1;
    }

    if (this.nextDataArrayIndex === this.stringOne.length * this.stringTwo.length) {
      console.log('Next step came to final');
      this.stepStop = true;
    }
  }

  // functionality of the previous step
  previousStep() {
    this.resetBackgrounds();
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
    if (this.dataArray[this.nextDataArrayIndex].preRow != null) {
      this.undoMatrix(this.nextRowIndex, this.nextColIndex, '',
        this.dataArray[this.nextDataArrayIndex].preRow + 1, this.dataArray[this.nextDataArrayIndex].preCol + 1);
    } else {
      this.undoMatrixWithoutpre(this.nextRowIndex, this.nextColIndex, '');
    }
  }

  // undo a step which has a pre. ref. cell
  undoMatrix(row, col, val, prerow, precol) {
    console.log('update matrix');
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
      if (point.preRow != null) {
        this.gridArray[point.preRow + 1][point.preCol + 1].refcolor = true;
      }
      this.selectImage(this.gridArray[point.row + 1][point.col + 1]);
    }
  }

  // undo the step which do not have a pre. ref. cell
  undoMatrixWithoutpre(row, col, val) {
    console.log('update matrix');
    this.gridArray[row][col].cellvalue = val;
    this.gridArray[0][col].color = false;
    this.gridArray[row][0].color = false;
    this.gridArray[row][col].datacolor = false;
    if (this.nextDataArrayIndex > 0) {
      let point;
      point = this.dataArray[this.nextDataArrayIndex - 1];
      this.gridArray[0][point.col + 1].color = true;
      this.gridArray[point.row + 1][0].color = true;
      this.gridArray[point.row + 1][point.col + 1].datacolor = true;
      if (point.preRow != null) {
        this.gridArray[point.preRow + 1][point.preCol + 1].refcolor = true;
      }
      this.selectImage(this.gridArray[point.row + 1][point.col + 1]);
    }
  }

  // reset colors of cells
  resetColor() {
    console.log('reset colors');
    for (const row of this.gridArray) {
      for (const col of row) {
        col.color = false;
        col.datacolor = false;
        col.refcolor = false;
      }
    }
  }

  // reset backgrounds
  resetBackgrounds() {
    for (const row of this.gridArray) {
      for (const col of row) {
        col.diag_img = false;
        col.side_img = false;
        col.up_img = false;
        col.diag_side_img = false;
        col.diag_up_img = false;
        col.side_up_img = false;
        col.diag_side_up_img = false;
      }
    }
  }


  // update the next step values,colors wich have precell
  updateMatrix(row, col, val, prerow, precol) {
    this.gridArray[row][col].cellvalue = val;
    this.gridArray[0][col].color = true;
    this.gridArray[row][0].color = true;
    this.gridArray[row][col].datacolor = true;
    this.gridArray[prerow][precol].refcolor = true;
  }

  // update the next step values,colors which do not have a pre cell
  updateMatrixWithoutpre(row, col, val) {
    this.gridArray[row][col].cellvalue = val;
    this.gridArray[0][col].color = true;
    this.gridArray[row][0].color = true;
    this.gridArray[row][col].datacolor = true;
  }

  // final button's function
  finalResult() {
    this.nextDataArrayIndex = this.stringOne.length * this.stringTwo.length;
    this.nextRowIndex = this.stringTwo.length + 2;
    this.nextColIndex = this.stringOne.length + 2;
    this.request = true;
    this.stepStop = true;
    this.noback = true;
    this.resetColor();
    this.resetBackgrounds();
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

  // clear grid
  clearall() {
    this.ngOnInit();

  }

  // reload the form for new alignment
  goBack() {
    location.reload();
  }

  // go to the requested step
  goToRequest() {
    let req = this.requestedStep;
    let current = this.nextDataArrayIndex;
    // show errors for minus values
    if (req < 0) {
      this.showMinusError();
    }
    // show errors for which exceeds the number of steps
    else if (req > this.stringOne.length * this.stringTwo.length) {
      this.showExcessRequestError();
    }
    else if (req > current) {

      for (let i = 0; i < req - current; i++) {
        this.nextStep();
      }
    }
    else if (req < current) {
      for (let i = 0; i < current - req; i++) {
        this.previousStep();
      }
    }
  }

  // select image
  selectImage(cell) {
    const upScore = this.dataArray[this.nextDataArrayIndex - 1].upScore;
    const leftScore = this.dataArray[this.nextDataArrayIndex - 1].leftScore;
    const diagonalScore = this.dataArray[this.nextDataArrayIndex - 1].diagonalScore;
    const max = this.dataArray[this.nextDataArrayIndex - 1].score;
    if (max === upScore && max === leftScore && max === diagonalScore) {
      cell.diag_side_up_img = true;
    }
    else if (max === upScore && max === diagonalScore) {
      cell.diag_up_img = true;
    }
    else if (max === leftScore && max === diagonalScore) {
      cell.diag_side_img = true;
    }
    else if (max === upScore && max === leftScore) {
      cell.side_up_img = true;
    }
    else if (max === upScore) {
      cell.up_img = true;
    }
    else if (max === leftScore) {
      cell.side_img = true;
    }
    else if (max === diagonalScore) {
      cell.diag_img = true;
    }
  }

  // show error alert for requesting minus step
  showMinusError() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Please request a non-negative step',
    });
  }

  // show error alert for requesting step exceeding the number of steps
  showExcessRequestError() {
    swal({
      type: 'error',
      title: 'Oops...',
      text: 'Please request a step equal or less than '.concat((this.stringOne.length * this.stringTwo.length).toString()),
    });
  }

}
