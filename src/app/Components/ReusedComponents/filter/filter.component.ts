import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  text: string[] = [
    "hover",
    "", 
    "", 
    "", 
    ""
  ]

  constructor() { }

  ngOnInit(): void {
  }

  filter(indexText: number){
    for(let i = 0; i < this.text.length; i++){
      if(indexText == i){
        this.text[i] = "hover";
      }else{
        this.text[i] = "";
      }
    }
  }

}
