import { Component, Input, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-entertainment-info',
  templateUrl: './entertainment-info.component.html',
  styleUrls: ['./entertainment-info.component.scss']
})
export class EntertainmentInfoComponent implements OnInit {

  @Input() entertainment!: Entertainment;
  @Input() isAnEvent?: boolean;

  ubication = {lat:-34.8887900442016, long:-56.15940182848994};

  rate: number = 3.4;

  constructor() { }

  ngOnInit(): void {
    //this.mapService.getLocationImage()
  }

  openMap(){
    window.open(`http://www.google.com/maps/place/${this.ubication.lat}, ${this.ubication.long}`,'_blank', 'location=yes')
  }

}
