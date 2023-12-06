import { TestBed } from '@angular/core/testing';

import { AdminDeactGuard } from './admin-deact.guard';

describe('AdminDeactGuard', () => {
  let guard: AdminDeactGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminDeactGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
