import { Test, TestingModule } from '@nestjs/testing';
import { MyCarsController } from './mycars.controller';

describe('MyCarsController', () => {
  let controller: MyCarsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyCarsController],
    }).compile();

    controller = module.get<MyCarsController>(MyCarsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
