import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Input() putBorderBottom?: boolean
  @Input() chatInfo?: ChatsPreview;

  constructor() { }

  ngOnInit(): void {
  }

  

}
