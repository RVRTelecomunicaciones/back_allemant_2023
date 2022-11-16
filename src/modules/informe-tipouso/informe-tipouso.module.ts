import { Module } from '@nestjs/common';
import { InformeTipousoService } from './informe-tipouso.service';
import { InformeTipousoController } from './informe-tipouso.controller';

@Module({
  providers: [InformeTipousoService],
  controllers: [InformeTipousoController]
})
export class InformeTipousoModule {}
