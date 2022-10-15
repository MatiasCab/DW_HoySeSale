import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { appAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[appAnimations]
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

