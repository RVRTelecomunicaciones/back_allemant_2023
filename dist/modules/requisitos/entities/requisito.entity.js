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
exports.Requisito = void 0;
const openapi = require("@nestjs/swagger");
const servicio_entity_1 = require("../../servicios/entities/servicio.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const typeorm_1 = require("typeorm");
let Requisito = class Requisito extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, servicios: { required: true, type: () => [require("../../servicios/entities/servicio.entity").Servicio] } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 100, name: 'nombre' }),
    __metadata("design:type", String)
], Requisito.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => servicio_entity_1.Servicio, (servicio) => servicio.requisitos, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Requisito.prototype, "servicios", void 0);
Requisito = __decorate([
    (0, typeorm_1.Entity)('co_requisito')
], Requisito);
exports.Requisito = Requisito;
//# sourceMappingURL=requisito.entity.js.map