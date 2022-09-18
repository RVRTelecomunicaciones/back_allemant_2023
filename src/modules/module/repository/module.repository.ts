import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm/repository/Repository';
import { Module } from '../entities/module.entity';

@CustomRepository(Module)
export class ModuleRepository extends Repository<Module> {}
