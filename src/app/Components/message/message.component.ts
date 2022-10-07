import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message?: {message:string, type: 'send' | 'recibe'};

  get getMessageType(){
    return this.message?.type;
  }

  constructor() { }

  ngOnInit(): void {
  }




}
