import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { User } from 'src/app/core/models/user';
import { BREAK_POINT } from 'src/app/core/consts';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  isMobile?: boolean;
  user?: User;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([BREAK_POINT])
      .subscribe(result => {
        const breakpoints = result.breakpoints;
        if (breakpoints[BREAK_POINT]) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });

    this.user = this.userService.User;
    if (!this.user) {
      this.userService.getThisUser().subscribe(
        user => {
          this.user = user;
        }
      );
    }
  }

}
