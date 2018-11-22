import { TestBed, inject } from '@angular/core/testing';

import { TransactionListService } from './transaction-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TransactionListService', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [TransactionListService],
         imports: [HttpClientTestingModule]
      });
   });

   it('should be created', inject([TransactionListService], (service: TransactionListService) => {
      expect(service).toBeTruthy();
   }));
});
