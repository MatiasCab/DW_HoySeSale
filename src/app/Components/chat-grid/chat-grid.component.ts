import { Component, Input, OnInit } from '@angular/core';

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

}
