import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopChatPageComponent } from './desktop-chat-page.component';

describe('DesktopChatPageComponent', () => {
  let component: DesktopChatPageComponent;
  let fixture: ComponentFixture<DesktopChatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopChatPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopChatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
