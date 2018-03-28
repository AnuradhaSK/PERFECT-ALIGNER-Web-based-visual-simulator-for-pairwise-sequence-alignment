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
      'The algorithm was developed by Saul B. Needleman and Christian D. Wunsch and published in 1970', rlink: 'nwalgo'},
    {name: 'Smith-Waterman', text: 'The Smith–Waterman algorithm performs local sequence alignment; ' +
      'that is, for determining similar regions between two strings of nucleic acid sequences or protein sequences.' +
      ' Instead of looking at the entire sequence, ' +
      'the Smith–Waterman algorithm compares segments of all possible lengths and optimizes the similarity measure. ' +
      'The algorithm was first proposed by Temple F. Smith and Michael S. Waterman in 1981.', rlink: 'swalgo'},
    {name: 'T-Coffee', text: 'T-Coffee (Tree-based Consistency Objective Function for Alignment Evaluation) is a ' +
      'multiple sequence alignment software using a progressive approach.' +
      ' It generates a library of pairwise alignments to guide the multiple sequence alignment.' +
      ' It can also combine multiple sequences alignments obtained previously and in the latest versions can use structural ' +
      'information from PDB files (3D-Coffee)', rlink: 'tcoffee'},
    {name: 'DIALIGN', text: 'DIALIGN is an alignment program that relies on comparison of ' +
      'whole segments of the sequences instead of comparison of single residue. Several versions available are Anchored DIALIGN,' +
      'CHAOS-DIALIGN, DIALIGN-TX, DIALIGN-PFAM' , rlink: 'dialign'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
