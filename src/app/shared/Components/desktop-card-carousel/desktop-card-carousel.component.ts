import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { ignoreElements } from 'rxjs';
import { appAnimations } from 'src/app/animations';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';
import { searchView } from 'src/app/core/models/searchInfo';

@Component({
  selector: 'app-desktop-card-carousel',
  templateUrl: './desktop-card-carousel.component.html',
  styleUrls: ['./desktop-card-carousel.component.scss'],
  animations: [appAnimations]
})
export class DesktopCardCarouselComponent implements OnInit {

  showedEntertainments?: entertainmentCardPreview[][];

  @ViewChild('carousel') carousel?: NgbCarousel;

  @Output() moreSlidesEvent: EventEmitter<void> = new EventEmitter();

  @Input() public set setEntertainments(entertainmentsInfo: searchView | undefined) {
    if (entertainmentsInfo) {
      console.log(entertainmentsInfo);
      this.setCards(entertainmentsInfo);
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  setCards(searchView: searchView) {
    let changeIndex = 3;
    let newEntertainmentArray: entertainmentCardPreview[][] = [];
    let newEntertainmentSet: entertainmentCardPreview[] = [];
    let incommingEntertainments = searchView.entertainments;

    if (searchView.action == 'extends') {
      const lastSet = this.showedEntertainments![this.showedEntertainments!.length - 1];
      let index = 0;
      for (let i = lastSet.length; i < 3; i++) {
        let cardEntertainment = incommingEntertainments.shift()
        if(cardEntertainment){
          lastSet.push(cardEntertainment);
        }
      }
    }

    for (const entertainment of incommingEntertainments) {
      if (changeIndex == 0) {
        newEntertainmentArray.push(newEntertainmentSet);
        newEntertainmentSet = [];
        changeIndex = 3;
      }
      newEntertainmentSet.push(entertainment);
      changeIndex--;
    }

    if (newEntertainmentSet.length > 0) {
      newEntertainmentArray.push(newEntertainmentSet);
    }
    if (searchView.action == 'extends') {
      this.showedEntertainments = [...this.showedEntertainments!, ...newEntertainmentArray];
    } else {
      this.showedEntertainments = newEntertainmentArray;
    }
  }


  chargeMoreCards() {
    const slideNumber = Number(this.carousel?.activeId);
    if (slideNumber + 1 == this.showedEntertainments?.length) {
      this.moreSlidesEvent.emit();
    }
    console.log('cards',this.showedEntertainments?.length);
    
    console.log('carousel',slideNumber);
  }



}
