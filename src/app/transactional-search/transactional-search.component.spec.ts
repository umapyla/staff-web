import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TransactionalSearchComponent } from './transactional-search.component';

fdescribe('TransactionalSearchComponent', () => {
  let component: TransactionalSearchComponent;
  let fixture: ComponentFixture<TransactionalSearchComponent>;

  // const mock = {
  //   transactions1: jasmine.createSpy('transactions1').and.returnValue({ Date: "20Nov2017", descripton: 'Installment ', Amount: "-R2000.00", Balance: "R13951.84"})
  // }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ TransactionalSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should call update result function if searchtext lenth is greater than equal to 3', () => {
    component.searchText="mee";
    component.updateResult();
    expect(component.searchText.length).toBe(3);
  });

  it('should call update result function if searchtext lenth is less than 3', () => {
    component.searchText="me";
    expect(component.searchText.length).toBe(2);
  });

//  fit('should be created', () => {
//   component.dummayArray = [];
//     component.updateResult();
//     expect(component.dummayArray.length).toEqual(mock);
//   });



});
