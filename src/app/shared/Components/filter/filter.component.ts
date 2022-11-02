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

  filter(indexText: number){
    for(let i = 0; i < this.sections.length; i++){
      if(indexText == i){
        this.sections[i][1] = "hover";
        this.sectionClick.emit(this.sections[i][0]);
      }else{
        this.sections[i][1] = "";
      }
    }
  }

}
