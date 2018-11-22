import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TransactionalSearchComponent } from './transactional-search.component';
import { TransactionSearchService } from '../transaction-search.service';
import { ITransactionDetail } from './transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const mockTransactionList: ITransactionDetail[] = [
 {
  descripton: 'Installment',
  Date: '20Nov2017',
  Amount: -2000.00,
  Balance: 13951.84
 },
 {
  Date: '15Oct2017',
  descripton: 'Purchasw ',
  Amount: 4800.00,
  Balance: 13951.84}
];



const mockTransactionServiceStub = {
  getData: jasmine.createSpy('getData').and.returnValue(Observable.of(mockTransactionList))
};

const mockSortType = 'Amount';

// const Amount = 
// const mockSort = {
//   sort : jasmine.createSpy('sort').and.returnValue(mockSortType)
// };

// const error = Observable.create(observer => {
//   observer.error(new Error('error'));
//   observer.complete();
// });

fdescribe('TransactionalSearchComponent', () => {
  let component: TransactionalSearchComponent;
  let fixture: ComponentFixture<TransactionalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ TransactionalSearchComponent ],
      providers: [TransactionSearchService, HttpClient,
      {provide: TransactionSearchService, useValue:  mockTransactionServiceStub}]
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
       descripton: 'Installment',
       Date: '20Nov2017',
       Amount: -2000.00,
       Balance: 13951.84
      }]);
     expect(component.dummayArray).toEqual([
      {
       descripton: 'Installment',
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
       descripton: 'Installment',
       Date: '20Nov2017',
       Amount: -2000.00,
       Balance: 13951.84
      }]);
     expect(component.dummayArray).toEqual([
      {
       descripton: 'Installment',
       Date: '20Nov2017',
       Amount: -2000.00,
       Balance: 13951.84
      }]);
  });

  // it('should created push value', () => {

  // });

  it('should be display search text length before 2', () => {
    component.searchText = 'ks';
    component.dummayArray = [];
    component.updateResult();
  expect(component.searchText.length).toBe(2);
  });

  // it('should be created dummy array', () => {
  //   component.transactions = mockTransactionList;
  //   component.sort('Amount');
  //   expect(component.transactions).toEqual(mockTransactionList);
  // });

  // it('should created in ascending order', () => {
  //   component.sorttype = 'asc';
  // component.sort(mockSortType);
  // expect(component.transactions).toBeLess;
  // });

  // it('should created in descending order', () => {
  // component.sorttype = 'desc';
  // component.sort(mockSortType);
  // expect(component.transactions).toEqual(mockTransactionList);
  // });

});
