import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DialignService} from '../../../services/dialign.service';
import {MsaSharingService} from '../../../services/msa-sharing.service';
import {Colorscheme, SCHEMES} from '../../../models/colorscheme';


@Component({
  selector: 'app-dialign-panel',
  templateUrl: './dialign-panel.component.html',
  styleUrls: ['./dialign-panel.component.css']
})

export class DialignPanelComponent implements OnInit {
  geneArray: any;
  maxlength: number;
  width: any;
  scheme = 'ClustalW';
  colorSchemes = SCHEMES;
  obj: any;
  colorArray:any;
  constructor(protected dialignService: DialignService,
              protected msasharingService: MsaSharingService) {
  }

  ngOnInit() {
    this.geneArray = this.msasharingService.getPanelData();
  }


  getMaxSequenceLength() {
    for (let x of this.colorSchemes) {
      if (x.name === this.scheme) {
        this.obj = x;
        this.colorArray = x.colors;
        console.log(this.colorArray);
      }
    }
    /*for (let x of this.colorSchemes) {
      if (x.name === this.scheme) {
        this.obj = x;
        console.log(this.obj.colors.A);
        console.log(this.obj.colors.B);
        console.log(this.obj.colors.C);
        console.log(this.obj.colors.D);
      }
    }*/
    this.maxlength = 0;
    let max = [];
    for (let i in this.geneArray) {
      if (this.maxlength < this.geneArray[i].sequence.split('').length) {
        this.maxlength = this.geneArray[i].sequence.split('').length;
        max = this.geneArray[i].sequence.split('');
      }
    }
    console.log(this.maxlength);
    this.calWidth();
    return max;

  }

  calWidth() {
    this.width = 100 + 20 * this.maxlength;
  }

  getColor(character) {
   /* let color;
    if (44 > character.charCodeAt(0) || character.charCodeAt(0) > 69) {
      color = '';
      console.log('not an aligned charcter');
    } else {
      console.log(character);*/
   console.log(character);
   console.log(this.colorArray.character);
   return this.colorArray.character;
      /*for (let x of this.colorSchemes) {
        if (x.name === this.scheme) {
          this.obj = x;
          console.log(character);
          color = this.obj.colors.character;
        }
      }*/
    /*}
    console.log(color);
    return color;*/
  }

  /* switch (char) {
     case 'A':
     case 'C':
     case 'I':
     case 'L':
     case 'M':
     case 'F':
     case 'W':
     case 'V':
       return '#2E5DCB';
     case 'K':
     case 'R':
       return '#F92B17';
     case 'E':
     case 'D':
       return '#E817F9';
     case 'N':
     case 'Q':
     case 'S':
     case 'T':
       return '#63C318';
     case 'G':
       return '#FA9915';
     case 'P':
       return '#FAFA15';
     case 'H':
     case 'Y':
       return '#15FADB';
   }
 }*/
}

