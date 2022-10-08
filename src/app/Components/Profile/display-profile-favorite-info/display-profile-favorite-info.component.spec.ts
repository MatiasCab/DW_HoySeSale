import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayProfileFavoriteInfoComponent } from './display-profile-favorite-info.component';

describe('DisplayProfileFavoriteInfoComponent', () => {
  let component: DisplayProfileFavoriteInfoComponent;
  let fixture: ComponentFixture<DisplayProfileFavoriteInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayProfileFavoriteInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayProfileFavoriteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
