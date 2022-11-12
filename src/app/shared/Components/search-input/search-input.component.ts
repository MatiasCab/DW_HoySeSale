import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('searchBar') searchBar?: ElementRef<HTMLInputElement>;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  public get getSearchInfo() : string | undefined{
    return this.searchBar?.nativeElement.value == '' ? undefined : this.searchBar?.nativeElement.value;
  }
  

  keyEnter(){
    this.searchEvent.emit(this.getSearchInfo);
  }



}
