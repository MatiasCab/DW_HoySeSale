import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChatMessagePageComponent } from '../chat-message-page/chat-message-page.component';

@Component({
  selector: 'app-chat-grid',
  templateUrl: './chat-grid.component.html',
  styleUrls: ['./chat-grid.component.scss']
})
export class ChatGridComponent implements OnInit {

  @Input() chatsArray: string[] = ["0","1","2", "3","0","1","2", "3", "0","1","2", "3", "0","1","2", "3", "0","1","2", "3"];

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('hiddenElement') chatMessagePage?: ChatMessagePageComponent;

  displa: boolean = false;

  openChat(){
    this.displa = true;
    this.chatMessagePage?.show();
  }

}
