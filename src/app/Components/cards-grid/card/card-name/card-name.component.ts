import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-name',
  templateUrl: './card-name.component.html',
  styleUrls: ['./card-name.component.scss']
})
export class CardNameComponent implements OnInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
