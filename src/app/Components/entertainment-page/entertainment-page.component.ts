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

  id = Number(this.route.snapshot.paramMap.get('id'));
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  }

}
