import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ConnectableObservable } from 'rxjs';

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

  constructor(private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      let types = [null, 'dancingParty', 'bar', 'pub', 'event'];
      for (let i = 0; i < types.length; i++) {
        if(types[i] == params.get('type')) {
          this.filter(i);
          break;
        }
      }
    })
  };

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

  filter(indexText: number, navigateRoute?: string | null){
    for(let i = 0; i < this.sections.length; i++){
      if(indexText == i){
        this.sections[i][1] = "hover";
      }else{
        this.sections[i][1] = "";
      }
    }
    if(navigateRoute){
      this.route.navigate(
        [],{
          relativeTo: this.activatedRoute,
          queryParams: {type: navigateRoute}, 
          queryParamsHandling: 'merge'
        }
      )
    }
    this.sectionClick.emit(this.getType());
  }

}
