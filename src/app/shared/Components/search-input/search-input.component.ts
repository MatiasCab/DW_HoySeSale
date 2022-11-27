import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, tap } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @ViewChild('searchBar') searchBar?: ElementRef<HTMLInputElement>;
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();

  private debounceTimer?: NodeJS.Timeout;

  public get getSearchInfo(): string | undefined {
    return this.searchBar?.nativeElement.value == '' ? undefined : this.searchBar?.nativeElement.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

  keyEnter(key: KeyboardEvent) {
    let reg = 'qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM-*/1234567890!¡¿?';
    if (reg.includes(key.key) || ('Backspace' == key.key)) {

      if (this.debounceTimer) clearTimeout(this.debounceTimer);

      this.debounceTimer = setTimeout(() => {
        this.searchEvent.emit(this.getSearchInfo);
      }, 500)
    }
  }



}
