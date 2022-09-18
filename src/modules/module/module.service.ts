import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ModuleRepository } from './repository/module.repository';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleRepository)
    private readonly repository: ModuleRepository
  ) {}
}
