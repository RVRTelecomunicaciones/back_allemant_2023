import { Test, TestingModule } from '@nestjs/testing';
import { ModuleLevelUserService } from './module-level-user.service';

describe('ModuleLevelUserService', () => {
  let service: ModuleLevelUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleLevelUserService],
    }).compile();

    service = module.get<ModuleLevelUserService>(ModuleLevelUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
