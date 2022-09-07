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
exports.Cotizacion = void 0;
const openapi = require("@nestjs/swagger");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const typeorm_1 = require("typeorm");
let Cotizacion = class Cotizacion extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo: { required: true, type: () => Number }, nro_informes: { required: true, type: () => Number }, actualizacion: { required: true, type: () => Boolean }, servicio_tipo_id: { required: true, type: () => Object }, estado_id: { required: true, type: () => Object }, adjunto: { required: true, type: () => String }, fecha_solicitud: { required: true, type: () => Date }, fecha_envio_cliente: { required: true, type: () => Date }, fecha_finalizacion: { required: true, type: () => Date }, vendedor_id: { required: true, type: () => Number }, orden_servicio: { required: true, type: () => String }, orden_servicio_adjunto: { required: true, type: () => String }, plazo: { required: true, type: () => Number }, motivo: { required: true, type: () => Object }, tipo_perito: { required: true, type: () => Number }, perito_id: { required: true, type: () => Number }, perito_costo: { required: true, type: () => Number }, datos_adicionales: { required: true, type: () => String }, desglose_id: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({
        type: 'bigint',
    }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "nro_informes", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false, default: false }),
    __metadata("design:type", Boolean)
], Cotizacion.prototype, "actualizacion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Cotizacion.prototype, "adjunto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Cotizacion.prototype, "fecha_solicitud", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Cotizacion.prototype, "fecha_envio_cliente", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'timestamp',
        nullable: true,
    }),
    __metadata("design:type", Date)
], Cotizacion.prototype, "fecha_finalizacion", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cotizacion.prototype, "vendedor_id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        length: 50,
        name: 'orden_servicio',
    }),
    __metadata("design:type", String)
], Cotizacion.prototype, "orden_servicio", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        length: 100,
        name: 'orden_servicio_adjunto',
    }),
    __metadata("design:type", String)
], Cotizacion.prototype, "orden_servicio_adjunto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "plazo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        length: 50,
        name: 'motivo',
    }),
    __metadata("design:type", Object)
], Cotizacion.prototype, "motivo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "tipo_perito", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'tinyint',
    }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "perito_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Cotizacion.prototype, "perito_costo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: true,
        length: 100,
        name: 'datos_adicionales',
    }),
    __metadata("design:type", String)
], Cotizacion.prototype, "datos_adicionales", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Cotizacion.prototype, "desglose_id", void 0);
Cotizacion = __decorate([
    (0, typeorm_1.Entity)('cotizacion')
], Cotizacion);
exports.Cotizacion = Cotizacion;
//# sourceMappingURL=cotizacion.entity.js.map