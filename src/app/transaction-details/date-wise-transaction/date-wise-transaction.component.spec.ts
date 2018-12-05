import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { TransactionListService } from '../transaction-list.service';
import { DateWiseTransectioComponent } from './date-wise-transaction.component';
import { ITransactionList } from './transaction.model';



const mockTransactionLIst: ITransactionList[] = [
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

const mockOldTransaction: ITransactionList[] = [

   {
      Date: '2017-06-19',
      Description: 'Thank You',
      Amount: 3000.00,
      Balance: 4500.00
   },
   {
      Date: '2017-06-18',
      Description: 'Thank You',
      Amount: 3000.00,
      Balance: 4500.00
   }
];
const mockThirtyDays = 30;
const mockSixtyDays = 60;
const mockNinetyDays = 90;

const mockTransactionListServiceStub = {
   getData: jasmine.createSpy('getData').and.returnValue(Observable.of(mockTransactionLIst))
};
describe('DateWiseTransectioComponent', () => {
   let component: DateWiseTransectioComponent;
   let fixture: ComponentFixture<DateWiseTransectioComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, BsDatepickerModule, HttpClientTestingModule],
         declarations: [DateWiseTransectioComponent],
         providers: [{ provide: TransactionListService, useValue: mockTransactionListServiceStub }]
      })
         .compileComponents();
   }));

   beforeEach(() => {
      fixture = TestBed.createComponent(DateWiseTransectioComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      component.transactions = mockTransactionLIst;
      component.transactionsApi = mockTransactionLIst;
   });

   it('should be created', () => {
      expect(component).toBeTruthy();
   });

   it('should get 30 days transaction', () => {
      component.dateRangeSearch(mockThirtyDays);
      expect(component.visibleTransactions).toEqual(component.transactions);
   });

   it('should get 60 days transaction', () => {
      component.dateRangeSearch(mockSixtyDays);
      expect(component.visibleTransactions).toEqual(component.transactions);
   });

   it('should get 90 days transaction', () => {
      component.dateRangeSearch(mockNinetyDays);
      expect(component.visibleTransactions).toEqual(component.transactions);
   });

   it('should get Transaction From-Date to To-Date', () => {
      component.fromDate = moment(new Date('2018-11-10')).format('YYYY-MM-DD');
      component.toDate = moment(new Date('2018-11-19')).format('YYYY-MM-DD');
      component.customSearch();
      expect(component.visibleTransactions).toEqual(component.transactions);
   });

   it('No transaction available for between date', () => {
      component.fromDate = moment(new Date('2018-11-20')).format('YYYY-MM-DD');
      component.toDate = moment(new Date('2018-11-22')).format('YYYY-MM-DD');
      component.customSearch();
      expect(component.visibleTransactions).toEqual([]);
   });

   it('Get transaction list faild', () => {
      mockTransactionListServiceStub.getData.and.returnValue(Observable.throw(new Error()));
      component.getTransactionList();
      expect(component.apiError).toBe(true);
   });

   it('Custom search on', () => {
      component.custom();
      expect(component.isCustom).toBe(true);
   });

   it('should get 90 days transaction', () => {
      mockTransactionListServiceStub.getData.and.returnValue(Observable.of(mockOldTransaction));
      component.ngOnInit();
      component.dateRangeSearch(mockNinetyDays);
      expect(component.isTransaction).toBe(false);
   });

});
