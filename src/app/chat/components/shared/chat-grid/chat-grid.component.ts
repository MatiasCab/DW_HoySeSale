import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ChatsPreview } from 'src/app/core/models/chatsPreview';

@Component({
  selector: 'app-chat-grid',
  templateUrl: './chat-grid.component.html',
  styleUrls: ['./chat-grid.component.scss']
})
export class ChatGridComponent implements OnInit {

  @Input() chatsPreview?: ChatsPreview[];
  @Input() routering?: boolean;
  @Output() chatSelected: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  selectedChat(chatId: number){
    this.chatSelected.emit(chatId);
  }

}
