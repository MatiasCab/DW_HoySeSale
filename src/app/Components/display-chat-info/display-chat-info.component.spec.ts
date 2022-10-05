import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChatInfoComponent } from './display-chat-info.component';

describe('DisplayChatInfoComponent', () => {
  let component: DisplayChatInfoComponent;
  let fixture: ComponentFixture<DisplayChatInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayChatInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayChatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
