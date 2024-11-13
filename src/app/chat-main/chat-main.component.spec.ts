import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMainComponent } from './chat-main.component';

describe('ChatMainComponent', () => {
  let component: ChatMainComponent;
  let fixture: ComponentFixture<ChatMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatMainComponent]
    });
    fixture = TestBed.createComponent(ChatMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
