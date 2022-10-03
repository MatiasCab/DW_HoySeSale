import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySearchInfoComponent } from './display-search-info.component';

describe('DisplaySearchInfoComponent', () => {
  let component: DisplaySearchInfoComponent;
  let fixture: ComponentFixture<DisplaySearchInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySearchInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySearchInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
