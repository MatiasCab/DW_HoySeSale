import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() sectionClick: EventEmitter<string> = new EventEmitter();

  sections: [string, string][] = [
    ["Todos","hover"],
    ["Bailes",""], 
    ["Bares",""], 
    ["Pubs",""], 
    ["Eventos",""]
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getType() {
    let type;
    for (const section of this.sections) {
      if(section[1] == 'hover'){
        type = section[0]
        break;
      }
    }
    switch (type) {
      case 'Bares':
        return 'bar';
      case 'Pubs':
        return 'pub';
      case 'Bailes':
        return 'dancingParty';
      case 'Eventos':
        return 'event';
      default:
        return undefined;
    }
  }

  filter(indexText: number){
    for(let i = 0; i < this.sections.length; i++){
      if(indexText == i){
        this.sections[i][1] = "hover";
      }else{
        this.sections[i][1] = "";
      }
    }
    this.sectionClick.emit(this.getType());
  }

}
