import { TestBed, inject } from '@angular/core/testing';

import { Observable } from 'rxjs';
import { TransactionSearchService } from './transaction-search.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ITransactionDetail } from './transactional-search/transaction.model';


const mockTransactionList: ITransactionDetail[] = [
  {Date: '20Nov2017', Description: 'Installment', Amount: 2000.0, Balance: 13951.84},
  {Date: '15Oct2017', Description: 'Purchase', Amount: 4800.0, Balance: 13951.84},
  {Date: '02Nov2016', Description: 'Payment Received' , Amount: 3000.0,  Balance: 10751.0}

];

const transactionStub = {

    get: jasmine.createSpy('get').and.returnValue(Observable.of(mockTransactionList))

};


describe('TransactionSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionSearchService,
        {provide: HttpClient, useValue: transactionStub}]
    });
  });

  it('should be created', inject([TransactionSearchService], (service: TransactionSearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should get transaction list', inject([TransactionSearchService], (service: TransactionSearchService) => {
   service.getData().subscribe((response) => {
     expect(response).toBeDefined();
     expect(response.length).toBe(3);
   });
  }));

});
