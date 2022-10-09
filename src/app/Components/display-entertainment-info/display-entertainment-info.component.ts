import { Component, Input, OnInit } from '@angular/core';
import { Entertainment } from 'src/app/models/entertainment';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  @Input() entertainment!: Entertainment;

  constructor() { }

  ngOnInit(): void {
  }

}
