import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEntertainmentInfoComponent } from './display-entertainment-info.component';

describe('DisplayEntertainmentInfoComponent', () => {
  let component: DisplayEntertainmentInfoComponent;
  let fixture: ComponentFixture<DisplayEntertainmentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayEntertainmentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayEntertainmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
