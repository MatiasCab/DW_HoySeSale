import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopCardCarouselComponent } from './desktop-card-carousel.component';

describe('DesktopCardCarouselComponent', () => {
  let component: DesktopCardCarouselComponent;
  let fixture: ComponentFixture<DesktopCardCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopCardCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopCardCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
