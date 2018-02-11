import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nwalgo',
  templateUrl: './nwalgo.component.html',
  styleUrls: ['./nwalgo.component.css']
})
export class NwalgoComponent implements OnInit {
  title = 'needleman-wunsch';
  Stringone: '';
  Stringtwo: '';

  constructor(

  ) {

  }

  ngOnInit() {
  }

}
