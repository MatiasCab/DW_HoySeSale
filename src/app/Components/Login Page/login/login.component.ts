import { Component, OnInit } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition, 
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // animations: [ 
  // // // //   trigger("openClose", [
  // // // //   transition("* => open", [
  // // // //     animate('5s',  style({filter: 'blur(0px)'}))
  // // // //   ]),
  // // // //   transition("open => *", [
  // // // //     animate('5s', style({filter: 'blur(8px)'}))
  // // // //   ])
  // // // // ])]
  // trigger("openClose", [
  // transition('* <=> *', [
  //   style(({ opacity: 0 })),
  //   animate('2s', style(({ opacity: 1})))
  // ])
  // ])]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
