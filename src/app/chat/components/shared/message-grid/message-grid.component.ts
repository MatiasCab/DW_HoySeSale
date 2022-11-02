import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-grid',
  templateUrl: './message-grid.component.html',
  styleUrls: ['./message-grid.component.scss']
})
export class MessageGridComponent implements OnInit {

  messages: string[] = [];
  @Input() messageToSend?: string;

  constructor() { }

  ngOnInit(): void {
  }

  newMessage(message: string ){
    this.messages.push(message)
  }

}
