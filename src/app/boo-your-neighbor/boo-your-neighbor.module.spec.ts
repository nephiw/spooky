import { BooYourNeighborModule } from './boo-your-neighbor.module';

describe('BooYourNeighborModule', () => {
  let booYourNeighborModule: BooYourNeighborModule;

  beforeEach(() => {
    booYourNeighborModule = new BooYourNeighborModule();
  });

  it('should create an instance', () => {
    expect(booYourNeighborModule).toBeTruthy();
  });
});
