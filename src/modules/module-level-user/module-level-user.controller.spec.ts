import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLevelUserController } from './module-level-user.controller';

describe('ModuleLevelUserController', () => {
  let controller: ModuleLevelUserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleLevelUserController],
    }).compile();

    controller = module.get<ModuleLevelUserController>(ModuleLevelUserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
