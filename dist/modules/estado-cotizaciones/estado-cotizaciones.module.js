"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EstadoCotizacionesModule = void 0;
const common_1 = require("@nestjs/common");
const estado_cotizaciones_service_1 = require("./estado-cotizaciones.service");
const estado_cotizaciones_controller_1 = require("./estado-cotizaciones.controller");
const typeorm_1 = require("@nestjs/typeorm");
const estado_cotizacion_entity_1 = require("./entities/estado-cotizacion.entity");
let EstadoCotizacionesModule = class EstadoCotizacionesModule {
};
EstadoCotizacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([estado_cotizacion_entity_1.EstadoCotizacion])],
        providers: [estado_cotizaciones_service_1.EstadoCotizacionesService],
        controllers: [estado_cotizaciones_controller_1.EstadoCotizacionesController],
    })
], EstadoCotizacionesModule);
exports.EstadoCotizacionesModule = EstadoCotizacionesModule;
//# sourceMappingURL=estado-cotizaciones.module.js.map