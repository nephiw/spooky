import { TestBed, inject } from '@angular/core/testing';

import { TrunkOrTreatService } from './trunk-or-treat.service';

describe('TrunkOrTreatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrunkOrTreatService]
    });
  });

  it('should be created', inject([TrunkOrTreatService], (service: TrunkOrTreatService) => {
    expect(service).toBeTruthy();
  }));
});
