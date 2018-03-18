import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DialignService} from '../../services/dialign.service';
import {MsaSharingService} from '../../services/msa-sharing.service';

@Component({
  selector: 'app-dialign-panel',
  templateUrl: './dialign-panel.component.html',
  styleUrls: ['./dialign-panel.component.css']
})
export class DialignPanelComponent implements OnInit/*, AfterViewInit */ {
  geneArray: any;
  /** Template reference to the canvas element */

  // @ViewChild('canvasEl') canvasEl: ElementRef;

  /** Canvas 2d context */
  // private context: CanvasRenderingContext2D;


  constructor(protected dialignService: DialignService,
              protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
    this.geneArray = this.msasharingService.getPanelData();
  }

  /*ngAfterViewInit() {
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');

    this.draw();
  }

  /**
   * Draws something using the context we obtained earlier on
   */

  /*private draw() {
    this.context.beginPath();
    this.context.moveTo(0, 0);
    this.context.lineTo(300, 150);
    this.context.stroke();
  }*/

  getMaxSequenceLength() {
    let maxlength = 0;
    let max = [];
    for (let i in this.geneArray) {
      if (maxlength < this.geneArray[i].sequence.split('').length) {
        maxlength = this.geneArray[i].sequence.split('').length;
        max = this.geneArray[i].sequence.split('');
      }
    }
    console.log(maxlength);
    return max;

  }

  /* drawOnCanvas() {
    let canvas = document.getElementById('dialigncanvas');
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(0, 0, 150, 75);
  }*/
}
