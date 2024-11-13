import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceMenuComponent } from './workspace-menu.component';

describe('WorkspaceMenuComponent', () => {
  let component: WorkspaceMenuComponent;
  let fixture: ComponentFixture<WorkspaceMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkspaceMenuComponent]
    });
    fixture = TestBed.createComponent(WorkspaceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
