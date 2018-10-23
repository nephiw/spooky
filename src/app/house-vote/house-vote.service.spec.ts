import { TestBed, inject } from '@angular/core/testing';

import { HouseVoteService } from './house-vote.service';

describe('HouseVoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HouseVoteService]
    });
  });

  it('should be created', inject([HouseVoteService], (service: HouseVoteService) => {
    expect(service).toBeTruthy();
  }));
});
