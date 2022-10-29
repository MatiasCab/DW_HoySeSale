import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { appAnimations } from 'src/app/animations';
import { ModalLogoutComponent } from '../modal-logout/modal-logout.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  animations: [appAnimations]
})
export class HomePageComponent implements OnInit {

  constructor(private modalService: NgbModal, private breakpointObserver: BreakpointObserver) {  }

  isMobile: boolean = true;

  ngOnInit(): void {
    this.breakpointObserver.observe(['(min-width: 900px)', Breakpoints.HandsetLandscape])
    .subscribe(result => {
      const breakpoints = result.breakpoints;
      console.log(result);
      //if(breakpoints[Breakpoints.Small] || breakpoints[Breakpoints.Medium] || breakpoints[Breakpoints.WebLandscape]){
      if(breakpoints['(min-width: 900px)']){
        this.isMobile = false;
      }else{
        this.isMobile = true;
      }
    })
  }

  openLogoutModal() {
    this.modalService.open(ModalLogoutComponent, {
      windowClass: 'backdrop',
      centered: true,
    });
  }

  logout(){
    console.log("kzdnflsndfdf")
  }

}
