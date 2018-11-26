
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactiondetailsComponent } from './transactiondetails.component';
import { DataService } from '../service/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { TxDetails, IShowDetails } from './transactiondetails.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


const mockTransList: IShowDetails[] = [
  {
    AccountNumber: '1944122702',
    TransactionType: 'Payment (Debit Order)',
    TransactionDescription: 'INSURECASH4000545980-133708320',
    TransactionAmount: '37.8',
    TransactionDate: '2017-12-08T00:00:00',
    ReferenceNumber: '6031171208023792',
    ErrorCode: 'R00'
  }
];

const mocktransactiondetails: TxDetails[] = [{
  id: 1,
  Date: '20Nov2017',
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
    }
  ]
}];



const dataServiceStub = {
  getData: jasmine.createSpy('getData').and.returnValue(Observable.of(mocktransactiondetails))
};

const error = Observable.create(observer => {
  observer.error(new Error('error'));
  observer.complete();
});



describe('TransactiondetailsComponent', () => {
  let component: TransactiondetailsComponent;
  let fixture: ComponentFixture<TransactiondetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, HttpClientTestingModule],
      declarations: [TransactiondetailsComponent],
      providers: [DataService, HttpClient,
        { provide: DataService, useValue: dataServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactiondetailsComponent);
    component = fixture.componentInstance;
    component.transactionDetails = mocktransactiondetails;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the transaction details', () => {
    dataServiceStub.getData.and.returnValue(Observable.of(mocktransactiondetails));
    component.getData();
    expect(component.transactionDetails).toBe(mocktransactiondetails);
  });

  it('handle error when transaction details having error', () => {
    dataServiceStub.getData.and.returnValue(error);
    component.getData();
    expect(component.errorMsg).toBe('Error Occurred');
 });

 it('bank details are present', () => {
  component.transactionDetails = mocktransactiondetails;
  const id = 1;
  component.moreDetails(id, mockTransList);
  expect(component.transactionDetails).toEqual(mocktransactiondetails);
});

it('bank details are not present', () => {
  component.transactionDetails = mocktransactiondetails;
  const id = 7;
  component.moreDetails(id, mockTransList);
  expect(component.transactionDetails).toEqual(mocktransactiondetails);
});
});
