import { TestBed, inject } from '@angular/core/testing';

import { TransactionSearchService } from './transaction-search.service';

describe('TransactionSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionSearchService]
    });
  });

  it('should be created', inject([TransactionSearchService], (service: TransactionSearchService) => {
    expect(service).toBeTruthy();
  }));
});
