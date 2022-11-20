import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificationCodeModalComponent } from './verification-code-modal.component';

describe('VerificationCodeModalComponent', () => {
  let component: VerificationCodeModalComponent;
  let fixture: ComponentFixture<VerificationCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificationCodeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerificationCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
