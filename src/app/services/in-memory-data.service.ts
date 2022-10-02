import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Image } from '../models/image';
import { Icon } from '../models/icon'; 

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const icons: Icon[] = [
      { id: 1, className: 'bi bi-house', description: 'home'},
      { id: 2, className: 'bi bi-house-fill', description: 'home fill'},
      { id: 3, className: 'bi bi-calendar2', description: 'calendar'},
      { id: 4, className: 'bi bi-calendar2-fill', description: 'calendar fill'},
      { id: 5, className: 'bi bi-person', description: 'profile'},
      { id: 6, className: 'bi bi-person-fill', description: 'profile fill'},
      { id: 7, className: 'bi bi-bookmark', description: 'bookmark'},
      { id: 8, className: 'bi bi-bookmark-fill', description: 'bookmark fill'},
      { id: 9, className: 'bi bi-star', description: 'star'},
      { id: 10, className: 'bi bi-star-fill', description: 'star fill'},
      { id: 11, className: 'bi bi-chat', description: 'chat'},
      { id: 12, className: 'bi bi-chat-fill', description: 'chat fill'},
      { id: 13, className: 'bi bi-box-arrow-left', description: 'logout'},
      { id: 14, className: 'bi bi-chevron-left', description: 'back'},
      { id: 15, className: 'bi bi-search', description: 'search'},
    ];

    const images: Image[] = [
      { id: 1, src: '../../assets/images/elevate-snnhGYNqm44-unsplash.jpg'},
      { id: 2, src: '../../assets/images/google-maps-marker.jpg'},
      { id: 3, src: '../../assets/images/louis-hansel-vm4g1MBZUv4-unsplash.jpg'},
      { id: 4, src: '../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg'},
      { id: 5, src: '../../assets/images/vonecia-carswell-3cBFqagweZM-unsplash.jpg'}
    ];

    return {icons, images};
  }
}
