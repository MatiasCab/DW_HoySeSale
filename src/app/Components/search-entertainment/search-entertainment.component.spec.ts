import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEntertainmentComponent } from './search-entertainment.component';

describe('SearchEntertainmentComponent', () => {
  let component: SearchEntertainmentComponent;
  let fixture: ComponentFixture<SearchEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchEntertainmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
