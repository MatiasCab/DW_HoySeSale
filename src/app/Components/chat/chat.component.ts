import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChatMessagePageComponent } from '../chat-message-page/chat-message-page.component';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() putBorderBottom!: boolean
  @Input() chatInfo!: string;

  hola: string = "j";

  constructor() { }

  ngOnInit(): void {
  }

}
