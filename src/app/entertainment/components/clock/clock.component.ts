import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClockService } from '../../services/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  @Input() targetDate?: Date;
  @Input() isMobile?: boolean;

  timerSubscription?: Subscription;
  countdown = {
    days: '0',
    hours: '0',
    minutes: '0',
    seconds: '0'
  }

  constructor(private clockService: ClockService) { }

  
  ngOnDestroy(): void {
    this.timerSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    if (this.targetDate) {
      this.timerSubscription = this.clockService.time(this.targetDate).subscribe(
        countdown => this.countdown = countdown
      )
    }
  }

}
