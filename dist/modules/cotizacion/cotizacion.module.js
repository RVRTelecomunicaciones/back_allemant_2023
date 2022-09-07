"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CotizacionModule = void 0;
const common_1 = require("@nestjs/common");
const cotizacion_service_1 = require("./cotizacion.service");
const cotizacion_controller_1 = require("./cotizacion.controller");
const typeorm_1 = require("@nestjs/typeorm");
const cotizacion_entity_1 = require("./entities/cotizacion.entity");
let CotizacionModule = class CotizacionModule {
};
CotizacionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cotizacion_entity_1.Cotizacion])],
        providers: [cotizacion_service_1.CotizacionService],
        controllers: [cotizacion_controller_1.CotizacionController],
    })
], CotizacionModule);
exports.CotizacionModule = CotizacionModule;
//# sourceMappingURL=cotizacion.module.js.map