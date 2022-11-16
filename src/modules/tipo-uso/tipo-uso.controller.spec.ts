import { Test, TestingModule } from '@nestjs/testing';
import { TipoUsoController } from './tipo-uso.controller';

describe('TipoUsoController', () => {
  let controller: TipoUsoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipoUsoController],
    }).compile();

    controller = module.get<TipoUsoController>(TipoUsoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
