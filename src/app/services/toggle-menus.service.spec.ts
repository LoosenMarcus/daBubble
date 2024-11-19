import { TestBed } from '@angular/core/testing';

import { ToggleMenusService } from './toggle-menus.service';

describe('ToggleMenusService', () => {
  let service: ToggleMenusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleMenusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
