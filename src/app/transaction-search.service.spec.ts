import { TestBed, inject } from '@angular/core/testing';

import { TransactionSearchService } from './transaction-search.service';
import { HttpClientModule } from "@angular/common/http";

describe('TransactionSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TransactionSearchService]
    });
  });

  it('should be created', inject([TransactionSearchService], (service: TransactionSearchService) => {
    expect(service).toBeTruthy();
  }));
});
