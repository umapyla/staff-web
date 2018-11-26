import { TestBed, inject } from '@angular/core/testing';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { TxDetails } from '../transactiondetails/transactiondetails.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/observable/of';

const mockTransactionList: TxDetails[] = [
 {
  id : 1,
  Date : '20Nov2017',
  descripton: 'Installment CC*',
  Amount: -2000.00,
  Balance: '13951.84',
  transaction_list: [
    {
      AccountNumber: '1944122702',
      TransactionType: 'Payment (Debit Order)',
      TransactionDescription: 'INSURECASH4000545980-133708320',
      TransactionAmount: '37.8',
      TransactionDate: '2017-12-08T00:00:00',
      ReferenceNumber: '6031171208023792',
      ErrorCode: 'R00'
    }]
  }];
const mockTransactionStub = {
    get: jasmine.createSpy('get').and.returnValue(Observable.of(mockTransactionList))
};

describe('Service: Data', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ DataService, { provide: HttpClient, useValue: mockTransactionStub}]
    });
  });

  it('should ...', inject([DataService], (service: DataService) => {
    expect(service).toBeTruthy();
  }));
  it('should get transaction details ...', inject([DataService], (service: DataService) => {
    service.getData().subscribe((response) => {
      expect(response).toBeDefined();
      expect(response.length).toBe(1);
    });
  }));

});


