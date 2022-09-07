"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const tokens_module_1 = require("./modules/tokens/tokens.module");
const users_module_1 = require("./modules/users/users.module");
const helper_module_1 = require("./processors/helper/helper.module");
const cotizacion_module_1 = require("./modules/cotizacion/cotizacion.module");
const areas_module_1 = require("./modules/areas/areas.module");
const tipo_servicios_module_1 = require("./modules/tipo-servicios/tipo-servicios.module");
const tipo_cotizaciones_module_1 = require("./modules/tipo-cotizaciones/tipo-cotizaciones.module");
const estado_cotizaciones_module_1 = require("./modules/estado-cotizaciones/estado-cotizaciones.module");
const desgloses_module_1 = require("./modules/desgloses/desgloses.module");
const monedas_module_1 = require("./modules/monedas/monedas.module");
const estado_coordinaciones_module_1 = require("./modules/estado-coordinaciones/estado-coordinaciones.module");
const servicios_module_1 = require("./modules/servicios/servicios.module");
const requisitos_module_1 = require("./modules/requisitos/requisitos.module");
const sector_involucrados_module_1 = require("./modules/sector-involucrados/sector-involucrados.module");
const clasificacion_involucrados_module_1 = require("./modules/clasificacion-involucrados/clasificacion-involucrados.module");
const involucrado_naturales_module_1 = require("./modules/involucrado-naturales/involucrado-naturales.module");
const involucrado_juridicos_module_1 = require("./modules/involucrado-juridicos/involucrado-juridicos.module");
const tipo_documentos_module_1 = require("./modules/tipo-documentos/tipo-documentos.module");
const api_config_service_1 = require("./shared/services/api-config.service");
const shared_module_1 = require("./shared/shared.module");
const env_helper_1 = require("./processors/helper/env.helper");
const envFilePath = (0, env_helper_1.getEnvPath)(`${__dirname}/common/envs`);
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [shared_module_1.SharedModule],
                useFactory: (configService) => configService.mysqlConfig,
                inject: [api_config_service_1.ApiConfigService],
            }),
            users_module_1.UsersModule,
            tokens_module_1.TokensModule,
            helper_module_1.HelperModule,
            cotizacion_module_1.CotizacionModule,
            areas_module_1.AreasModule,
            tipo_servicios_module_1.TipoServiciosModule,
            tipo_cotizaciones_module_1.TipoCotizacionesModule,
            estado_cotizaciones_module_1.EstadoCotizacionesModule,
            desgloses_module_1.DesglosesModule,
            monedas_module_1.MonedasModule,
            estado_coordinaciones_module_1.EstadoCoordinacionesModule,
            servicios_module_1.ServiciosModule,
            requisitos_module_1.RequisitosModule,
            sector_involucrados_module_1.SectorInvolucradosModule,
            clasificacion_involucrados_module_1.ClasificacionInvolucradosModule,
            involucrado_naturales_module_1.InvolucradoNaturalesModule,
            involucrado_juridicos_module_1.InvolucradoJuridicosModule,
            tipo_documentos_module_1.TipoDocumentosModule,
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map