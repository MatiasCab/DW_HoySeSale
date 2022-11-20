import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  constructor() { }

  update(finishDate: Date){
    const timeDifference = finishDate.getTime() - Date.now();
    
    const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
    const hours = Math.floor(timeDifference / (60 * 60 * 1000));
    const minutes = Math.floor(timeDifference / (60 * 1000));
    const seconds = Math.floor(timeDifference /  (1000));
    console.log(seconds);
    
    return {
      days: days,
      hours: hours - (days * 24),
      minutes: minutes - (hours * 60),
      seconds: seconds - (minutes * 60)
    }
  }

  time(finishDate: Date) {
    return interval(1000).pipe(
      map(_ => this.update(finishDate))
    )
  }
}
