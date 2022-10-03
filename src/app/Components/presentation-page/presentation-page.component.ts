import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition, 
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-presentation-page',
  templateUrl: './presentation-page.component.html',
  styleUrls: ['./presentation-page.component.scss'],
  // animations: [ 
  //   //   trigger("openClose", [
  //   //   transition("* => open", [
  //   //     animate('5s',  style({filter: 'blur(0px)'}))
  //   //   ]),
  //   //   transition("open => *", [
  //   //     animate('5s', style({filter: 'blur(8px)'}))
  //   //   ])
  //   // ])]
  //   trigger("openClose2", [
  //     transition('* => open', [
  //       style(({ opacity: 1 })),
  //       animate('5s', style(({ opacity: 0})))
  //     ])
  //   ])]

})
export class PresentationPageComponent implements OnInit {

  j?:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  c(){
    this.j = true;
  }

}
