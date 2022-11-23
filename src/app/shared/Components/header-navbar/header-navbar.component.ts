import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { appAnimations } from 'src/app/animations';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss'],
  animations: [appAnimations]
})
export class HeaderNavbarComponent implements OnInit {

  @Input() currentIcon1?: string;
  @Input() currentIcon2?: string;
  @Input() currentText?: string;
  @Input() backPage?: string;
  @Input() firstIcon?: string;
  @Output() icon2Event: EventEmitter<void> = new EventEmitter();
  @Output() icon1Event: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(eventNumber: number) {
    switch (eventNumber) {
      case 1:
        this.icon1Event.emit();
        break;
      case 2:
        this.icon2Event.emit();
        break;
    }
  }

}
