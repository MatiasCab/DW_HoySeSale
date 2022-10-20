import { Component } from '@angular/core';
import { ChildrenOutletContexts} from '@angular/router';
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
              private route: Router) {}

  get show(){
    return (this.route.url != '/login') && 
          (this.route.url != '/presentation') && 
          (this.route.url != '/singUp') && 
          (!this.route.url.includes('/chats/@'));
  } 
  
  title = 'angular-hoy-se-sale';
  
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

