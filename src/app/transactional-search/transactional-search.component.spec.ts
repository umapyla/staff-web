import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionalSearchComponent } from './transactional-search.component';

describe('TransactionalSearchComponent', () => {
  let component: TransactionalSearchComponent;
  let fixture: ComponentFixture<TransactionalSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
