/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchCardsService } from './SearchCards.service';

describe('Service: SearchCards', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchCardsService]
    });
  });

  it('should ...', inject([SearchCardsService], (service: SearchCardsService) => {
    expect(service).toBeTruthy();
  }));
});
