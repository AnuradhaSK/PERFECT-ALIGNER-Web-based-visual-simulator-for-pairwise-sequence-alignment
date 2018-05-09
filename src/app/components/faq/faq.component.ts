import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  /*function () {
    // Since there's no list-group/tab integration in Bootstrap
    ('.list-group-item').on('click', function (e) {
     let previous = (this)
        .closest('.list-group')
        .children('.active');
      previous.removeClass('active'); // previous list-item
      (e.target).addClass('active'); // activated list-item
    });
  }*/
}
