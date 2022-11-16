import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { InformeTasacion } from '../entities/informe-tasacion.entity';

@CustomRepository(InformeTasacion)
export class InformeTasacionRepository extends Repository<InformeTasacion> {}
