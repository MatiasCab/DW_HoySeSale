import { Component, Input, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-entertainment-info',
  templateUrl: './entertainment-info.component.html',
  styleUrls: ['./entertainment-info.component.scss']
})
export class EntertainmentInfoComponent implements OnInit {

  @Input() entertainment!: Entertainment;

  rate: number = 3.4;

  constructor() { }

  ngOnInit(): void {
  }

}
