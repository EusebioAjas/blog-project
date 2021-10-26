import { Component, Input } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-rating-basic',
  templateUrl: './rating-basic.html',
  styles: [`
    .filled {
      color: #AF7709;
      font-weight: bold;
    }
  `],
  providers: [NgbRatingConfig]
})
export class NgbdRatingBasic {
  @Input() currentRate = 0;
  constructor(config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}
