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
exports.InvolucradoNatural = void 0;
const openapi = require("@nestjs/swagger");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const tipo_documento_entity_1 = require("../../tipo-documentos/entities/tipo-documento.entity");
const typeorm_1 = require("typeorm");
let InvolucradoNatural = class InvolucradoNatural extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { paterno: { required: true, type: () => String }, materno: { required: true, type: () => String }, nombre: { required: true, type: () => String }, tipoDocumento: { required: true, type: () => require("../../tipo-documentos/entities/tipo-documento.entity").TipoDocumento }, nro_documento: { required: true, type: () => String }, telefono: { required: true, type: () => String }, celular1: { required: true, type: () => String }, celular2: { required: true, type: () => String }, direccion: { required: true, type: () => String }, correo: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50, name: 'paterno' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "paterno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50, name: 'materno' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "materno", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50, name: 'nombre' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_documento_entity_1.TipoDocumento, (tipoDocumento) => tipoDocumento.involucrados),
    __metadata("design:type", tipo_documento_entity_1.TipoDocumento)
], InvolucradoNatural.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        length: 8,
        name: 'nro_documento',
    }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "nro_documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 10, name: 'telefono' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 9, name: 'celular1' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "celular1", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 9, name: 'celular2' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "celular2", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 150, name: 'direccion' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 100, name: 'correo' }),
    __metadata("design:type", String)
], InvolucradoNatural.prototype, "correo", void 0);
InvolucradoNatural = __decorate([
    (0, typeorm_1.Entity)('co_involucrado_natural'),
    (0, typeorm_1.Unique)('nro_documento', ['nro_documento'])
], InvolucradoNatural);
exports.InvolucradoNatural = InvolucradoNatural;
//# sourceMappingURL=involucrado-natural.entity.js.map