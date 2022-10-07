import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChatMessageComponent } from './display-chat-message.component';

describe('DisplayChatMessageComponent', () => {
  let component: DisplayChatMessageComponent;
  let fixture: ComponentFixture<DisplayChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayChatMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayChatMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
