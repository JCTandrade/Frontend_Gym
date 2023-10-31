import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { AuthServiceService } from './service/auth-service.service';

describe('AuthGuard', () => {
  let guard: AuthGuard;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
