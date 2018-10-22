import { HouseVoteModule } from './house-vote.module';

describe('HouseVoteModule', () => {
  let houseVoteModule: HouseVoteModule;

  beforeEach(() => {
    houseVoteModule = new HouseVoteModule();
  });

  it('should create an instance', () => {
    expect(houseVoteModule).toBeTruthy();
  });
});
