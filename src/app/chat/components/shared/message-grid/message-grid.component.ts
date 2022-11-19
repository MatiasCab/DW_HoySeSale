import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageFullInfo } from 'src/app/core/models/messages';

@Component({
  selector: 'app-message-grid',
  templateUrl: './message-grid.component.html',
  styleUrls: ['./message-grid.component.scss']
})
export class MessageGridComponent implements OnInit {

  @Input() messages?: MessageFullInfo[];
  @Input() messageToSend?: string;

  constructor() { }

  ngOnInit(): void {
  }

  newMessage(messageInfo: MessageFullInfo){
    this.messages?.push(messageInfo);
  }

}
