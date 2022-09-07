"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClasificacionInvolucradosModule = void 0;
const common_1 = require("@nestjs/common");
const clasificacion_involucrados_service_1 = require("./clasificacion-involucrados.service");
const clasificacion_involucrados_controller_1 = require("./clasificacion-involucrados.controller");
const typeorm_1 = require("@nestjs/typeorm");
const clasificacion_involucrado_entity_1 = require("./entities/clasificacion-involucrado.entity");
let ClasificacionInvolucradosModule = class ClasificacionInvolucradosModule {
};
ClasificacionInvolucradosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([clasificacion_involucrado_entity_1.ClasificacionInvolucrado])],
        providers: [clasificacion_involucrados_service_1.ClasificacionInvolucradosService],
        controllers: [clasificacion_involucrados_controller_1.ClasificacionInvolucradosController],
    })
], ClasificacionInvolucradosModule);
exports.ClasificacionInvolucradosModule = ClasificacionInvolucradosModule;
//# sourceMappingURL=clasificacion-involucrados.module.js.map