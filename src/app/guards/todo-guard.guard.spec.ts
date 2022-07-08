import { TestBed } from '@angular/core/testing';

import { TodoGuardGuard } from './todo-guard.guard';

describe('TodoGuardGuard', () => {
  let guard: TodoGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TodoGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
