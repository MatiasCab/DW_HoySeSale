import { Component, OnInit } from '@angular/core';

import { Entretainment } from 'src/app/models/entretainment';

@Component({
  selector: 'app-entertainment-page',
  templateUrl: './entertainment-page.component.html',
  styleUrls: ['./entertainment-page.component.scss']
})
export class EntertainmentPageComponent implements OnInit {

  entertainment!: Entretainment;
  
  constructor() { }

  ngOnInit(): void {
  }

}
