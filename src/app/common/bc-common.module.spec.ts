import { BcCommonModule } from './bc-common.module';

describe('BcCommonModule', () => {
  let bcCommonModule: BcCommonModule;

  beforeEach(() => {
    bcCommonModule = new BcCommonModule();
  });

  it('should create an instance', () => {
    expect(bcCommonModule).toBeTruthy();
  });
});
