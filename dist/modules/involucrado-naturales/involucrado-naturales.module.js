"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvolucradoNaturalesModule = void 0;
const common_1 = require("@nestjs/common");
const involucrado_naturales_service_1 = require("./involucrado-naturales.service");
const involucrado_naturales_controller_1 = require("./involucrado-naturales.controller");
const typeorm_1 = require("@nestjs/typeorm");
const involucrado_natural_entity_1 = require("./entities/involucrado-natural.entity");
let InvolucradoNaturalesModule = class InvolucradoNaturalesModule {
};
InvolucradoNaturalesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([involucrado_natural_entity_1.InvolucradoNatural])],
        providers: [involucrado_naturales_service_1.InvolucradoNaturalesService],
        controllers: [involucrado_naturales_controller_1.InvolucradoNaturalesController],
    })
], InvolucradoNaturalesModule);
exports.InvolucradoNaturalesModule = InvolucradoNaturalesModule;
//# sourceMappingURL=involucrado-naturales.module.js.map