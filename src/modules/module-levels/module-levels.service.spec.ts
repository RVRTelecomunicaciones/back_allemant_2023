import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLevelsService } from './module-levels.service';

describe('ModuleLevelsService', () => {
  let service: ModuleLevelsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleLevelsService],
    }).compile();

    service = module.get<ModuleLevelsService>(ModuleLevelsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
