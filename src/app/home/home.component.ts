import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  algos = [
    {name: 'Needleman-Wunsch', text: 'The Needleman–Wunsch algorithm is an algorithm used in bioinformatics to align protein or ' +
      'nucleotide sequences. It was one of the first applications of dynamic programming to compare biological sequences. ' +
      'The algorithm was developed by Saul B. Needleman and Christian D. Wunsch and published in 1970', path: '../assets/images/' +
      'Needleman-Wunsch_PHOTO.png', rlink: 'nwalgo'},
    {name: 'Smith-Waterman', text: 'The Smith–Waterman algorithm performs local sequence alignment; ' +
      'that is, for determining similar regions between two strings of nucleic acid sequences or protein sequences.' +
      ' Instead of looking at the entire sequence, ' +
      'the Smith–Waterman algorithm compares segments of all possible lengths and optimizes the similarity measure. ' +
      'The algorithm was first proposed by Temple F. Smith and Michael S. Waterman in 1981.', path: '../assets/images/' +
      'Smith-Waterman-PHOTO.png', rlink: 'swalgo'},
    {name: 'Blast', text: 'In bioinformatics, BLAST for Basic Local Alignment Search Tool is ' +
      'an algorithm for comparing primary biological sequence information, ' +
      'such as the amino-acid sequences of proteins or the nucleotides of DNA sequences. ' +
      'A BLAST search enables a researcher to compare a query sequence with a library or database of sequences, ' +
      'and identify library sequences that resemble the query sequence above a certain threshold.', path: '../assets/images/' +
      'blast-logo.jpg', rlink: ''}
  ];
  constructor() { }

  ngOnInit() {
  }

}
