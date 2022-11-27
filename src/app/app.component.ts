import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Router } from '@angular/router';
import { appAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [appAnimations]
})
export class AppComponent {

  title = 'Hoy se sale';

  get show() {
    return (this.route.url != '/login') &&
      (this.route.url != '/') &&
      (this.route.url != '/singUp') &&
      (!this.route.url.includes('/chat/'));
  }

  get navbarSelection(): number {
    const urls = ['/home', '/search', '/calendar', '/chat', '/profile']
    for (let i = 0; i < urls.length; i++) {
      if (this.route.url.includes(urls[i])) return i;
    }
    if (this.route.url.includes('/entertainment')) return 1;
    return 0;
  }

  constructor(
    private contexts: ChildrenOutletContexts,
    private route: Router
  ) { }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}

