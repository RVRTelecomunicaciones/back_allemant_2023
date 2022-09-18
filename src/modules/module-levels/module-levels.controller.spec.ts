import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLevelsController } from './module-levels.controller';

describe('ModuleLevelsController', () => {
  let controller: ModuleLevelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleLevelsController],
    }).compile();

    controller = module.get<ModuleLevelsController>(ModuleLevelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
