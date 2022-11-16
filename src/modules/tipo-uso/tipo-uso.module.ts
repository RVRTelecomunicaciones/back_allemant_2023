import { Module } from '@nestjs/common';
import { TipoUsoService } from './tipo-uso.service';
import { TipoUsoController } from './tipo-uso.controller';
import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { TipoUsoRepository } from './repository/tipo-uso.repository';

@Module({
    imports: [TypeOrmExModule.forCustomRepository([TipoUsoRepository])],
    providers: [TipoUsoService],
    controllers: [TipoUsoController],
    exports: [TipoUsoService],
})
export class TipoUsoModule {}
