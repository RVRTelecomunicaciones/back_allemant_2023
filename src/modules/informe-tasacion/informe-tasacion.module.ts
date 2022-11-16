import { Module } from '@nestjs/common';
import { InformeTasacionService } from './informe-tasacion.service';
import { InformeTasacionController } from './informe-tasacion.controller';
import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { InformeTasacionRepository } from './repository/informe-tasacion.repository';

@Module({
    imports: [TypeOrmExModule.forCustomRepository([InformeTasacionRepository])],
    providers: [InformeTasacionService],
    controllers: [InformeTasacionController],
    exports: [InformeTasacionService],
})
export class InformeTasacionModule {}
