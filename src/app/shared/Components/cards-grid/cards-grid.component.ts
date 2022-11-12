import { Component, Input, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/animations';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { searchView } from 'src/app/core/models/searchInfo';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss'],
  animations: [appAnimations]
})

export class CardsGridComponent implements OnInit {

  entertainments?: entertainmentCardPreview[];

  @Input() public set setEntertainments(entertainmentsInfo: searchView | undefined) {
    if (entertainmentsInfo) {
      this.setCards(entertainmentsInfo);
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  setCards(entertainmentsInfo?: searchView){
    if (entertainmentsInfo?.action == 'extends') {
      this.entertainments = [...this.entertainments!, ...entertainmentsInfo.entertainments];
    } else {
      this.entertainments = entertainmentsInfo?.entertainments;
    }
  }
}