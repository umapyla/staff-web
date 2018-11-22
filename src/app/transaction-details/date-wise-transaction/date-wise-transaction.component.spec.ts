import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { TransactionListService } from '../transaction-list.service';
import { DateWiseTransectioComponent } from './date-wise-transaction.component';
import { TransactionList } from './transaction.model';



const mockTransactionLIst: TransactionList[] = [
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

const mockOldTransaction: TransactionList[] = [

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
fdescribe('DateWiseTransectioComponent', () => {
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
      component.transactions3 = mockTransactionLIst;
   });

   it('should be created', () => {
      expect(component).toBeTruthy();
   });

   it('should get 30 days transaction', () => {
      component.searchThirtyDay(mockThirtyDays);
      expect(component.transactions).toEqual(mockTransactionLIst);
   });

   it('should get 60 days transaction', () => {
      component.searchThirtyDay(mockSixtyDays);
      expect(component.transactions).toEqual(mockTransactionLIst);
   });

   it('should get 90 days transaction', () => {
      component.searchThirtyDay(mockNinetyDays);
      expect(component.transactions).toEqual(mockTransactionLIst);
   });

   it('should get Transaction From-Date to To-Date', () => {
      component.fromDate = moment(new Date('2018-11-10')).format('YYYY-MM-DD');
      component.toDate = moment(new Date('2018-11-19')).format('YYYY-MM-DD');
      component.customSearch();
      expect(component.transactions).toEqual(mockTransactionLIst);
   });

   it('No transaction available for between date', () => {
      component.fromDate = moment(new Date('2018-11-20')).format('YYYY-MM-DD');
      component.toDate = moment(new Date('2018-11-22')).format('YYYY-MM-DD');
      component.customSearch();
      expect(component.transactions).toEqual([]);
   });

   it('API Not responding', () => {
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
      component.searchThirtyDay(mockNinetyDays);
      expect(component.isTransaction).toBe(false);
   });

});
