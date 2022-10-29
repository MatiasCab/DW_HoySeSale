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
    return (this.route.url != '/presentation/login') && 
          (this.route.url != '/presentation') && 
          (this.route.url != '/presentation/singUp') && 
          (!this.route.url.includes('/chat/@'));// Otra forma de hacerlo por si las dudas console.log(this.contexts.getContext('primary')?.route?.snapshot.paramMap.has('username'));
  } 
  
  title = 'angular-hoy-se-sale';
  
  getRouteAnimationData() {
    //this.contexts.getContext('primary')?.route?.snapshot.paramMap.has('username');
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

