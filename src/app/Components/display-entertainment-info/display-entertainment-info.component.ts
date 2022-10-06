import { Component, Input, OnInit } from '@angular/core';
import { Entretainment } from 'src/app/models/entretainment';

@Component({
  selector: 'app-display-entertainment-info',
  templateUrl: './display-entertainment-info.component.html',
  styleUrls: ['./display-entertainment-info.component.scss']
})
export class DisplayEntertainmentInfoComponent implements OnInit {

  @Input() entertainment!: Entretainment;

  constructor() { }

  ngOnInit(): void {
  }

}
