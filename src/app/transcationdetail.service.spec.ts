import { TestBed, inject } from '@angular/core/testing';

import { TranscationdetailService } from './transcationdetail.service';

describe('TranscationdetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranscationdetailService]
    });
  });

  it('should be created', inject([TranscationdetailService], (service: TranscationdetailService) => {
    expect(service).toBeTruthy();
  }));
});
