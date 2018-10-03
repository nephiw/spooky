import { TrunkOrTreatModule } from './trunk-or-treat.module';

describe('TrunkOrTreatModule', () => {
  let trunkOrTreatModule: TrunkOrTreatModule;

  beforeEach(() => {
    trunkOrTreatModule = new TrunkOrTreatModule();
  });

  it('should create an instance', () => {
    expect(trunkOrTreatModule).toBeTruthy();
  });
});
