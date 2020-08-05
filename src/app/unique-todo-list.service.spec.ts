import { TestBed } from '@angular/core/testing';

import { UniqueTodoListService } from './unique-todo-list.service';

describe('UniqueTodoListService', () => {
  let service: UniqueTodoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueTodoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
