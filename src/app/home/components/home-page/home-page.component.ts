import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { ModalLogoutComponent } from '../../../shared/Components/modal-logout/modal-logout.component';
import { appAnimations } from 'src/app/animations';
import { BREAK_POINT } from 'src/app/core/consts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  animations: [appAnimations]
})
export class HomePageComponent implements OnInit {
  
  isMobile: boolean = true;

  constructor(private modalService: NgbModal, private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([BREAK_POINT])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      if (breakpoints[BREAK_POINT]) {
        this.isMobile = false;
      } else {
        this.isMobile = true;
      }
    });
  }

  openLogoutModal() {
    this.modalService.open(ModalLogoutComponent, {
      windowClass: 'backdrop',
      centered: true,
    });
  }

}
