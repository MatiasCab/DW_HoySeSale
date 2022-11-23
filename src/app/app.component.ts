import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Router } from '@angular/router';
import { appAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [appAnimations]
})
export class AppComponent{

  title = 'Hoy se sale';

  get show() {
    return (this.route.url != '/presentation/login') &&
      (this.route.url != '/presentation') &&
      (this.route.url != '/presentation/singUp') &&
      (!this.route.url.includes('/chat/'));// Otra forma de hacerlo por si las dudas console.log(this.contexts.getContext('primary')?.route?.snapshot.paramMap.has('username'));
  }

  get navbarSelection(): number {
    const urls = ['/home', '/search', '/calendar', '/chat', '/profile']
    for (let i = 0; i < urls.length; i++) {
      if (this.route.url.includes(urls[i])) return i;
    }
    if (this.route.url.includes('/entertainment')) return 1;
    return 0;
  }

  constructor(private contexts: ChildrenOutletContexts,
    private route: Router
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

