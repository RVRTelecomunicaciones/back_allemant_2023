"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorInvolucradosModule = void 0;
const common_1 = require("@nestjs/common");
const sector_involucrados_service_1 = require("./sector-involucrados.service");
const sector_involucrados_controller_1 = require("./sector-involucrados.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sector_involucrado_entity_1 = require("./entities/sector-involucrado.entity");
let SectorInvolucradosModule = class SectorInvolucradosModule {
};
SectorInvolucradosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sector_involucrado_entity_1.SectorInvolucrado])],
        providers: [sector_involucrados_service_1.SectorInvolucradosService],
        controllers: [sector_involucrados_controller_1.SectorInvolucradosController],
    })
], SectorInvolucradosModule);
exports.SectorInvolucradosModule = SectorInvolucradosModule;
//# sourceMappingURL=sector-involucrados.module.js.map