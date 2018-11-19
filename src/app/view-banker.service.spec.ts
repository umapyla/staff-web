import { TestBed, inject } from '@angular/core/testing';

import { ViewBankerService } from './view-banker.service';

describe('ViewBankerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewBankerService]
    });
  });

  it('should be created', inject([ViewBankerService], (service: ViewBankerService) => {
    expect(service).toBeTruthy();
  }));
});
