import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import {
  trigger,
  style,
  animate,
  transition,
  query,
  animateChild,
  group
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
  trigger("presentationToLogin", [
    transition('a <=> b', [    
      query(':enter, :leave', style({ position: 'fixed', width:'100%' }), {optional: true}),
      group([ 
        query(':enter', [
          style({ opacity: 0}),
          animate('0.2s', style({ opacity: 1}))
        ], {optional: true}),
        query(':leave', [
          style({filter: 'blur(0px)'}),
          animate('0.2s', style({filter: 'blur(10px)'}))], {optional: true}),
      ])
    ])
  ])
]
})

export class AppComponent {

  constructor(private contexts: ChildrenOutletContexts,
              private router: Router) {}

  get route(){
    return this.router.url
  }
  
  title = 'angular-hoy-se-sale';
  
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

