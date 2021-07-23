import { TestBed } from '@angular/core/testing';

import { BooksPageFacadeService } from './books-page-facade.service';

describe('BooksPageFacadeService', () => {
  let service: BooksPageFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksPageFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
