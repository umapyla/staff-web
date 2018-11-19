import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankerComponent } from './view-banker.component';

describe('ViewBankerComponent', () => {
  let component: ViewBankerComponent;
  let fixture: ComponentFixture<ViewBankerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBankerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBankerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
