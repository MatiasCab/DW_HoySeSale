import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-input-user-credentials',
  templateUrl: './input-user-credentials.component.html',
  styleUrls: ['./input-user-credentials.component.scss']
})
export class InputUserCredentialsComponent implements OnInit {

  @Input() inputLabel?: string;
  @Input() inputType?: string;
  @Input() inputTypeAutocomplete?: string;
  @Output() keypressEvent: EventEmitter<string> = new EventEmitter();
  @ViewChild('inputInfo') inputInfo?: ElementRef<HTMLInputElement>;

  get InputInfo(){
    return this.inputInfo?.nativeElement.value;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  keypress(){
    this.keypressEvent.emit(this.InputInfo);
  }

}
