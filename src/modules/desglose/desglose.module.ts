import { Module } from '@nestjs/common';
import { DesglosesController } from './desgloses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Desglose } from './entities/desglose.entity';
import { DesgloseService } from './desglose.service';
import { TypeOrmExModule } from '@app/typeorm/typeorm-ex.module';
import { DesgloseRepository } from './repository/desglose.repository';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([DesgloseRepository])],
  providers: [DesgloseService],
  controllers: [DesglosesController],
})
export class DesgloseModule {}
