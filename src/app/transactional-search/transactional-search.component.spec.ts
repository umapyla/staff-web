import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TransactionalSearchComponent } from './transactional-search.component';
import { TransactionSearchService } from '../transaction-search.service';
import { ITransactionDetail } from './transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

const mockTransactionList: ITransactionDetail[] = [
   {
      Description: 'Installment',
      Date: '20Nov2017',
      Amount: -2000.00,
      Balance: 13951.84
   },
   {
      Date: '15Oct2017',
      Description: 'Purchase ',
      Amount: 4800.00,
      Balance: 13951.84
   }
];

const mockTransactionListSecond: ITransactionDetail[] = [
   {
      Date: '15Oct2017',
      Description: 'Purchase ',
      Amount: 4800.00,
      Balance: 13951.84
   },
   {
      Description: 'Installment',
      Date: '20Nov2017',
      Amount: -2000.00,
      Balance: 13951.84
   }];

const mockTransactionServiceStub = {
   getData: jasmine.createSpy('getData').and.returnValue(Observable.of(mockTransactionList))
};

const mockSortType = 'Amount';

describe('TransactionalSearchComponent', () => {
   let component: TransactionalSearchComponent;
   let fixture: ComponentFixture<TransactionalSearchComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, HttpClientModule],
         declarations: [TransactionalSearchComponent],
         providers: [TransactionSearchService, HttpClient,
            { provide: TransactionSearchService, useValue: mockTransactionServiceStub }]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(TransactionalSearchComponent);
      component = fixture.componentInstance;
      component.transactions = mockTransactionList;
      fixture.detectChanges();
   });

   it('should be created', () => {
      expect(component).toBeTruthy();
   });

   it('should be created', () => {
      mockTransactionServiceStub.getData.and.returnValue(Observable.of(mockTransactionList));
      component.getData();
      expect(component.transactions).toBe(mockTransactionList);
   });

   it('should be created error', () => {
      mockTransactionServiceStub.getData.and.returnValue(Observable.throw(new Error()));
      component.getData();
      expect(component.errorMsg).toBe(true);
   });

   it('should be display search text length after 3', () => {
      component.searchText = 'ins';
      component.updateResult();
      expect(component.searchText.length).toBe(3);
      expect(component.transactions).toEqual([
         {
            Description: 'Installment',
            Date: '20Nov2017',
            Amount: -2000.00,
            Balance: 13951.84
         }]);
      expect(component.TemporaryTransactions).toEqual([
         {
            Description: 'Installment',
            Date: '20Nov2017',
            Amount: -2000.00,
            Balance: 13951.84
         }]);
   });

   it('should be display search text length after 3', () => {
      component.searchText = 'Ins';
      component.updateResult();
      expect(component.searchText.length).toBe(3);
      expect(component.transactions).toEqual([
         {
            Description: 'Installment',
            Date: '20Nov2017',
            Amount: -2000.00,
            Balance: 13951.84
         }]);
      expect(component.TemporaryTransactions).toEqual([
         {
            Description: 'Installment',
            Date: '20Nov2017',
            Amount: -2000.00,
            Balance: 13951.84
         }]);
   });

   it('should be display search text length before 2', () => {
      component.searchText = 'ks';
      component.TemporaryTransactions = [];
      component.updateResult();
      expect(component.searchText.length).toBe(2);
   });

   it('should be created amount in ascending order for amount is greater than amount ', () => {
      component.sorttype = 'asc';
      component.sortData(mockSortType);
      expect(component.transactions).toEqual(mockTransactionList);

   });

   it('should be created in ascending order for amount', () => {
      component.sorttype = 'asc';
      component.sortData(mockSortType);
      expect(component.transactions).toEqual(mockTransactionListSecond);
   });

   it('should be created amount in ascending order for amount is greater than amount ', () => {
      component.sorttype = 'sdg';
      component.sortData(mockSortType);
      expect(component.transactions).toBe(mockTransactionList);
   });

   it('should be created amount in descending order', () => {
      component.sorttype = 'desc';
      component.sortData(mockSortType);
      expect(component.transactions).toEqual(mockTransactionList);
   });
});
