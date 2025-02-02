import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarPickerComponent } from './avatar-picker.component';

describe('AvatarPickerComponent', () => {
  let component: AvatarPickerComponent;
  let fixture: ComponentFixture<AvatarPickerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarPickerComponent]
    });
    fixture = TestBed.createComponent(AvatarPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
