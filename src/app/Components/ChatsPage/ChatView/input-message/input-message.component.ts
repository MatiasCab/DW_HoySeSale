import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-message',
  templateUrl: './input-message.component.html',
  styleUrls: ['./input-message.component.scss']
})
export class InputMessageComponent implements OnInit {

  @Output() message: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('messageContent') inputMessage?: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    if(this.inputMessage?.nativeElement.value != null){
      this.message.emit(this.inputMessage?.nativeElement.value);
      this.inputMessage!.nativeElement.value = '';
    }
  }
}
