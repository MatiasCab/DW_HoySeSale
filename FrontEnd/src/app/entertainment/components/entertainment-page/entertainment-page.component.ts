import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment!: Entertainment;

  favoriteIcon: string = 'bi bi-bookmark';

  isAnEvent: boolean = false;
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const entertainmentID = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(entertainmentID);
    if(entertainmentID > 2){
      this.isAnEvent = true;
    }
  }

  changFavoriteIcon(){
    if(this.favoriteIcon == 'bi bi-bookmark'){
      this.favoriteIcon = 'bi-bookmark-fill';
    }else{
      this.favoriteIcon = 'bi bi-bookmark';
    }
  }

}
