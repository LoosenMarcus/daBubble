import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartscreenComponent } from './startscreen.component';

describe('StartscreenComponent', () => {
  let component: StartscreenComponent;
  let fixture: ComponentFixture<StartscreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartscreenComponent]
    });
    fixture = TestBed.createComponent(StartscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
