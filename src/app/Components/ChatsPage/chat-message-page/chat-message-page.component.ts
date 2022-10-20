import { Component, Input, OnInit } from '@angular/core';
import { appAnimations } from 'src/app/animations';

@Component({
  selector: 'app-chat-message-page',
  templateUrl: './chat-message-page.component.html',
  styleUrls: ['./chat-message-page.component.scss'],
  animations: [appAnimations]
})
export class ChatMessagePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
