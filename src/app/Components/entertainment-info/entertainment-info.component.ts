import { Component, Input, OnInit } from '@angular/core';
import { Entretainment } from 'src/app/models/entretainment';

@Component({
  selector: 'app-entertainment-info',
  templateUrl: './entertainment-info.component.html',
  styleUrls: ['./entertainment-info.component.scss']
})
export class EntertainmentInfoComponent implements OnInit {

  @Input() entertainment!: Entretainment;

  constructor() { }

  ngOnInit(): void {
  }

}
