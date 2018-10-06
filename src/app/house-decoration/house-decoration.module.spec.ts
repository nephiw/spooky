import { HouseDecorationModule } from './house-decoration.module';

describe('HouseDecorationModule', () => {
  let houseDecorationModule: HouseDecorationModule;

  beforeEach(() => {
    houseDecorationModule = new HouseDecorationModule();
  });

  it('should create an instance', () => {
    expect(houseDecorationModule).toBeTruthy();
  });
});
