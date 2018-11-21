import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { TransactionListService } from '../transaction-list.service';
import { DateWiseTransectioComponent } from './date-wise-transaction.component';
import { transactionList } from '../transaction-list/transaction.model';


const mockTransactionLIst: transactionList[] = [
   {
      Date: "2018-11-19",
      Description: "Thank You",
      Amount: 3000.00,
      Balance: 4500.00
   },
   {
      Date: "2018-11-18",
      Description: "Thank You",
      Amount: 3000.00,
      Balance: 4500.00
   }];
   const days:number = 30;
   const mockTransactionListServiceStub = {
      getData: jasmine.createSpy('getData').and.returnValue(Observable.of(mockTransactionLIst))
   }
fdescribe('DateWiseTransectioComponent', () => {
   let component: DateWiseTransectioComponent;
   let fixture: ComponentFixture<DateWiseTransectioComponent>;

   beforeEach(async(() => {
      TestBed.configureTestingModule({
         imports: [FormsModule, ReactiveFormsModule, BsDatepickerModule, HttpClientTestingModule],
         declarations: [DateWiseTransectioComponent],
         providers: [{provide: TransactionListService, useValue: mockTransactionListServiceStub}]
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
   
  it('should get data for 30 days',()=>{
    component.searchThirtyDay(days);
    expect(component.transactions).toEqual(mockTransactionLIst);
  });

  it('customSearch function to be execute',() =>{
      component.fromDate = moment(new Date('2018-11-10')).format('YYYY-MM-DD');
      component.toDate = moment(new Date('2018-11-19')).format('YYYY-MM-DD');
      component.customSearch();
      expect(component.transactions).toEqual(mockTransactionLIst);
  });
});
