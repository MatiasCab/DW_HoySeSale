import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message, MessageFullInfo } from 'src/app/core/models/messages';
import { UserService } from 'src/app/profile/services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() messageInfo?: MessageFullInfo;

  get getMessageType(){
    return this.messageInfo?.type;
  }

  get getImageLink() {
    return this.messageInfo?.senderImage
  }

  constructor() { }

  ngOnInit(): void {
  }





}
