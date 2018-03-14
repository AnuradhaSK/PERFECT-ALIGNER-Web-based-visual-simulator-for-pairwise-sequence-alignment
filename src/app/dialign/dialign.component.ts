import {Component, OnInit} from '@angular/core';
import {FastareaderService} from '../services/fastareader.service';


@Component({
  selector: 'app-dialign',
  templateUrl: './dialign.component.html',
  styleUrls: ['./dialign.component.css'],
  providers: [FastareaderService]
})
export class DialignComponent implements OnInit {

  data: any;

  constructor(protected fastareaderService: FastareaderService) {
  }

  ngOnInit() {
  }


}
