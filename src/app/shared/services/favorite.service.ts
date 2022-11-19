import { Injectable } from '@angular/core';
import { UserService } from 'src/app/profile/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

constructor(private userService: UserService) { }

favoriteAction(actualFavoriteStatus: string, entertainmentId: number){
  if (actualFavoriteStatus == 'bi bi-bookmark') {
    const serverStatus = this.userService.addToFavorite(entertainmentId);
    return {icon: 'bi-bookmark-fill', serverStatus};
  } else {
    const serverStatus = this.userService.quitToFavorite(entertainmentId);
    return {icon: 'bi bi-bookmark', serverStatus};
  }
}

}
