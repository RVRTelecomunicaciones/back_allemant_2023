"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoServiciosModule = void 0;
const common_1 = require("@nestjs/common");
const tipo_servicios_service_1 = require("./tipo-servicios.service");
const tipo_servicios_controller_1 = require("./tipo-servicios.controller");
const typeorm_1 = require("@nestjs/typeorm");
const tipo_servicio_entity_1 = require("./entities/tipo-servicio.entity");
let TipoServiciosModule = class TipoServiciosModule {
};
TipoServiciosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tipo_servicio_entity_1.TipoServicio])],
        providers: [tipo_servicios_service_1.TipoServiciosService],
        controllers: [tipo_servicios_controller_1.TipoServiciosController],
    })
], TipoServiciosModule);
exports.TipoServiciosModule = TipoServiciosModule;
//# sourceMappingURL=tipo-servicios.module.js.map