"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvolucradoJuridicosModule = void 0;
const common_1 = require("@nestjs/common");
const involucrado_juridicos_service_1 = require("./involucrado-juridicos.service");
const involucrado_juridicos_controller_1 = require("./involucrado-juridicos.controller");
const typeorm_1 = require("@nestjs/typeorm");
const involucrado_juridico_entity_1 = require("./entities/involucrado-juridico.entity");
let InvolucradoJuridicosModule = class InvolucradoJuridicosModule {
};
InvolucradoJuridicosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([involucrado_juridico_entity_1.InvolucradoJuridico])],
        providers: [involucrado_juridicos_service_1.InvolucradoJuridicosService],
        controllers: [involucrado_juridicos_controller_1.InvolucradoJuridicosController],
    })
], InvolucradoJuridicosModule);
exports.InvolucradoJuridicosModule = InvolucradoJuridicosModule;
//# sourceMappingURL=involucrado-juridicos.module.js.map