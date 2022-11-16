import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Desglose } from '../entities/desglose.entity';

@CustomRepository(Desglose)
export class DesgloseRepository extends Repository<Desglose> {}
