import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

import { BREAKPOINT } from '../../consts';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalLogoutComponent } from 'src/app/shared/Components/modal-logout/modal-logout.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  @Input() set setIconColor(iconNumber: number) {
    this.fillIcon(iconNumber);
  };

  isMobile: boolean = true;
  icons: string[] = [
    "bi bi-house-fill fillColor",
    "bi bi-search",
    "bi bi-calendar",
    "bi bi-chat",
    "bi bi-person"
  ];
  private baseIcons: string[] = [
    "bi bi-house",
    "bi bi-search",
    "bi bi-calendar",
    "bi bi-chat",
    "bi bi-person",
    "bi bi-house-fill fillColor",
    "bi bi-search fillColor",
    "bi bi-calendar-fill fillColor",
    "bi bi-chat-fill fillColor",
    "bi bi-person-fill fillColor"
  ];

  constructor( private modalService: NgbModal, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([BREAKPOINT])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[BREAKPOINT]) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  fillIcon(iconNumber: number) {
    for (let i = 0; i < this.icons.length; i++) {
      if (iconNumber == i) {
        this.icons[i] = this.baseIcons[this.baseIcons.length / 2 + i];
      } else {
        this.icons[i] = this.baseIcons[i];
      }
    }
  }

  openLogoutModal() {
    this.modalService.open(ModalLogoutComponent, {
      windowClass: 'backdrop',
      centered: true,
    });
  }

}
