import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swalgo',
  templateUrl: './swalgo.component.html',
  styleUrls: ['./swalgo.component.css']
})
export class SwalgoComponent implements OnInit {
  title = 'smith-waterman';
  Stringone: '';
  Stringtwo: '';
  constructor() {
  }

  ngOnInit() {
  }
}
