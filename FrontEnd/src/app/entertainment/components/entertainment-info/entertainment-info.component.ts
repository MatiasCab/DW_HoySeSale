import { Component, Inject, Input, OnInit } from '@angular/core';
import { Coordinates } from 'src/app/core/models/coordinates';
import { LocalEvent } from 'src/app/core/models/event';
import { Local } from 'src/app/core/models/local';

@Component({
  selector: 'app-entertainment-info',
  templateUrl: './entertainment-info.component.html',
  styleUrls: ['./entertainment-info.component.scss']
})
export class EntertainmentInfoComponent implements OnInit {

  @Input() entertainment?: LocalEvent | Local;
  @Input() isAnEvent?: boolean;

  mapAPIURL?: string;

  rate: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.mapAPIURL = `https://maps.googleapis.com/maps/api/staticmap?markers=color:0xD450E6%7C${this.entertainment?.ubication.lat},${this.entertainment?.ubication.long}&center=${this.entertainment?.ubication.lat}, ${this.entertainment?.ubication.long}&zoom=17&size=300x300&key=AIzaSyB3I7IivhrGbnu07pdRW3mflhN3xilRUwQ&map_id=dd44d28a312be6da`;
    if(!this.isAnEvent){
      this.rate = (this.entertainment as Local).qualification;
    }
  }
  

  openMap(){
    window.open(`http://www.google.com/maps/place/${this.entertainment?.ubication}, ${this.entertainment?.ubication}`,'_blank', 'location=yes')
  }

  getDate(){
    return (this.entertainment as LocalEvent).schedule;
  }

}
