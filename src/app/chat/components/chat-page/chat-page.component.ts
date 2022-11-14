import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageGridComponent } from '../shared/message-grid/message-grid.component';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit {

  @ViewChild('messageGrid') messageGrid?: MessageGridComponent;
  isMobile?: boolean;

  constructor(private breakpointObserver: BreakpointObserver) { }

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
  sendMessage(message: string){
    this.messageGrid?.newMessage(message);
  }
}
