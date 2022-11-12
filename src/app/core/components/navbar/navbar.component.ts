import { Component, Input, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { ScreenDataService } from 'src/app/services/screen-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  icons: string[] = [
    "bi bi-house-fill fillColor",
    "bi bi-search", 
    "bi bi-calendar", 
    "bi bi-chat", 
    "bi bi-person"
  ]

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
  ]

  isMobile: boolean = true;

  @Input() set setIconColor(iconNumber: number) {
    this.fillIcon(iconNumber);
  }
  

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) { }

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

  fillIcon(iconNumber: number) { //fijarese si esto aun sige siendo util con el tema de rout
    for(let i = 0; i < this.icons.length; i++){
      if(iconNumber == i){
        this.icons[i] = this.baseIcons[this.baseIcons.length/2 + i];
      }else{
        this.icons[i] = this.baseIcons[i];
      }
    }
  }

}
