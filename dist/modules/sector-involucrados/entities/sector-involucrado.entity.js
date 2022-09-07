"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectorInvolucrado = void 0;
const openapi = require("@nestjs/swagger");
const involucrado_juridico_entity_1 = require("../../involucrado-juridicos/entities/involucrado-juridico.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const typeorm_1 = require("typeorm");
let SectorInvolucrado = class SectorInvolucrado extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, involucradosSec: { required: true, type: () => [require("../../involucrado-juridicos/entities/involucrado-juridico.entity").InvolucradoJuridico] } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50, name: 'nombre' }),
    __metadata("design:type", String)
], SectorInvolucrado.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => involucrado_juridico_entity_1.InvolucradoJuridico, (involucrado) => involucrado.sector),
    __metadata("design:type", Array)
], SectorInvolucrado.prototype, "involucradosSec", void 0);
SectorInvolucrado = __decorate([
    (0, typeorm_1.Entity)('co_involucrado_sector')
], SectorInvolucrado);
exports.SectorInvolucrado = SectorInvolucrado;
//# sourceMappingURL=sector-involucrado.entity.js.map