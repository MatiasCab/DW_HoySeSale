import { Component, Input, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/animations';
import { entertainmentCardPreview } from 'src/app/core/models/entertainmentCardPreview';

@Component({
  selector: 'app-cards-grid',
  templateUrl: './cards-grid.component.html',
  styleUrls: ['./cards-grid.component.scss'],
  animations: [appAnimations]
})

export class CardsGridComponent implements OnInit {

  @Input() entertainments?: entertainmentCardPreview[];

  constructor() { }

  ngOnInit(): void {
  }

}