import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscationListingComponent } from './transcation-listing.component';

describe('TranscationListingComponent', () => {
  let component: TranscationListingComponent;
  let fixture: ComponentFixture<TranscationListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscationListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranscationListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
