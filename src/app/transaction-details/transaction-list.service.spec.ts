import { TestBed, inject } from '@angular/core/testing';

import { TransactionListService } from './transaction-list.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ITransactionList } from './date-wise-transaction/transaction.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

const transactionList: ITransactionList[] = [
    {
       Date: '2018-11-19',
       Description: 'Thank You',
       Amount: 3000.00,
       Balance: 4500.00
    },
    {
       Date: '2018-11-18',
       Description: 'Thank You',
       Amount: 3000.00,
       Balance: 4500.00
    }];
const mocktransactionListStub = {
        get: jasmine.createSpy('get').and.returnValue(Observable.of(transactionList))
};

describe('TransactionListService', () => {
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [TransactionListService, {provide: HttpClient, useValue: mocktransactionListStub}],
         imports: [HttpClientTestingModule]
      });
   });

   it('should be created', inject([TransactionListService], (service: TransactionListService) => {
      expect(service).toBeTruthy();
   }));
   it('should get transaction list', inject([TransactionListService], (service: TransactionListService) => {
        service.getData().subscribe((response) => {
            expect(response).toBeDefined();
            expect(response.length).toBe(2);
        });
 }));
});
