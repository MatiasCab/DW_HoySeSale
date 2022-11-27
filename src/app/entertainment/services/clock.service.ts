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

    const hoursFormated = hours - (days * 24);
    const minutesFormated = minutes - (hours * 60);
    const secondsFormated = seconds - (minutes * 60);
    
    return {
      days: days + '',
      hours: hoursFormated < 10 ? '0'+ hoursFormated : hoursFormated + '',
      minutes: minutesFormated < 10 ? '0' + minutesFormated : minutesFormated + '',
      seconds: secondsFormated < 10 ? '0' + secondsFormated : secondsFormated + ''
    }
  }

  time(finishDate: Date) {
    return interval(1000).pipe(
      map(_ => this.update(finishDate))
    )
  }
}
