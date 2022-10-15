
import { animate, style, transition, trigger } from '@angular/animations';
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
  @Input() withBackButton: boolean = true;
  @Output() icon2Event: EventEmitter<void> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(){
    this.icon2Event.emit();
  }

}
