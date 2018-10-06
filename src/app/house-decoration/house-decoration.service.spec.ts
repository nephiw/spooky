import { TestBed, inject } from '@angular/core/testing';

import { HouseDecorationService } from './house-decoration.service';

describe('HouseDecorationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseDecorationService]
    });
  });

  it('should be created', inject([HouseDecorationService], (service: HouseDecorationService) => {
    expect(service).toBeTruthy();
  }));
});
