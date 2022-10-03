import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUserCredentialsComponent } from './input-user-credentials.component';

describe('InputUserCredentialsComponent', () => {
  let component: InputUserCredentialsComponent;
  let fixture: ComponentFixture<InputUserCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUserCredentialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputUserCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
