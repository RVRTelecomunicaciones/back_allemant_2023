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
exports.Servicio = void 0;
const openapi = require("@nestjs/swagger");
const requisito_entity_1 = require("../../requisitos/entities/requisito.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const tipo_servicio_entity_1 = require("../../tipo-servicios/entities/tipo-servicio.entity");
const typeorm_1 = require("typeorm");
let Servicio = class Servicio extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String }, tipoServicio: { required: true, type: () => require("../../tipo-servicios/entities/tipo-servicio.entity").TipoServicio }, requisitos: { required: true, type: () => [require("../../requisitos/entities/requisito.entity").Requisito] } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 60, name: 'nombre' }),
    __metadata("design:type", String)
], Servicio.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_servicio_entity_1.TipoServicio, (tipoServicio) => tipoServicio.servicios),
    __metadata("design:type", tipo_servicio_entity_1.TipoServicio)
], Servicio.prototype, "tipoServicio", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => requisito_entity_1.Requisito, (requisito) => requisito.servicios),
    (0, typeorm_1.JoinTable)({
        name: 'co_requisito_servicio_detalle',
        joinColumn: { name: 'servicioId', referencedColumnName: 'id' },
        inverseJoinColumn: {
            name: 'requisitoId',
            referencedColumnName: 'id',
        },
    }),
    __metadata("design:type", Array)
], Servicio.prototype, "requisitos", void 0);
Servicio = __decorate([
    (0, typeorm_1.Entity)('co_servicio')
], Servicio);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.entity.js.map