import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateWiseTransectioComponent } from './date-wise-transectio.component';

describe('DateWiseTransectioComponent', () => {
  let component: DateWiseTransectioComponent;
  let fixture: ComponentFixture<DateWiseTransectioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateWiseTransectioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateWiseTransectioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
