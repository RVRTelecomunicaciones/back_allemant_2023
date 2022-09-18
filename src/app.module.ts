import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { TokensModule } from './modules/tokens/tokens.module';
import { UsersModule } from './modules/users/users.module';
import { HelperModule } from './processors/helper/helper.module';
import { CotizacionModule } from './modules/cotizacion/cotizacion.module';
import { AreasModule } from './modules/areas/areas.module';
import { TipoServiciosModule } from './modules/tipo-servicios/tipo-servicios.module';
import { TipoCotizacionesModule } from './modules/tipo-cotizaciones/tipo-cotizaciones.module';
import { EstadoCotizacionesModule } from './modules/estado-cotizaciones/estado-cotizaciones.module';
import { DesglosesModule } from './modules/desgloses/desgloses.module';
import { MonedasModule } from './modules/monedas/monedas.module';
import { EstadoCoordinacionesModule } from './modules/estado-coordinaciones/estado-coordinaciones.module';
import { ServiciosModule } from './modules/servicios/servicios.module';
import { RequisitosModule } from './modules/requisitos/requisitos.module';
import { SectorInvolucradosModule } from './modules/sector-involucrados/sector-involucrados.module';
import { ClasificacionInvolucradosModule } from './modules/clasificacion-involucrados/clasificacion-involucrados.module';
import { InvolucradoNaturalesModule } from './modules/involucrado-naturales/involucrado-naturales.module';
import { InvolucradoJuridicosModule } from './modules/involucrado-juridicos/involucrado-juridicos.module';
import { TipoDocumentosModule } from './modules/tipo-documentos/tipo-documentos.module';
import { ApiConfigService } from './shared/services/api-config.service';
import { SharedModule } from './shared/shared.module';
import { getEnvPath } from 'processors/helper/env.helper';
import { ModuleModule } from './modules/module/module.module';
import { ModuleLevelsModule } from './modules/module-levels/module-levels.module';
import { ModuleLevelUserModule } from './modules/module-level-user/module-level-user.module';

const envFilePath: string = getEnvPath(`${__dirname}/common/envs`);
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath }),
    TypeOrmModule.forRootAsync({
      imports: [SharedModule],
      useFactory: (configService: ApiConfigService) => configService.mysqlConfig,
      inject: [ApiConfigService],
    }),
    UsersModule,
    //AuthModule,
    TokensModule,
    HelperModule,
    CotizacionModule,
    AreasModule,
    TipoServiciosModule,
    TipoCotizacionesModule,
    EstadoCotizacionesModule,
    DesglosesModule,
    MonedasModule,
    EstadoCoordinacionesModule,
    ServiciosModule,
    RequisitosModule,
    SectorInvolucradosModule,
    ClasificacionInvolucradosModule,
    InvolucradoNaturalesModule,
    InvolucradoJuridicosModule,
    TipoDocumentosModule,
    ModuleModule,
    ModuleLevelsModule,
    ModuleLevelUserModule,
  ],

  providers: [],
})
export class AppModule {}
