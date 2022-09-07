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
exports.InvolucradoJuridico = void 0;
const openapi = require("@nestjs/swagger");
const clasificacion_involucrado_entity_1 = require("../../clasificacion-involucrados/entities/clasificacion-involucrado.entity");
const sector_involucrado_entity_1 = require("../../sector-involucrados/entities/sector-involucrado.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const tipo_documento_entity_1 = require("../../tipo-documentos/entities/tipo-documento.entity");
const typeorm_1 = require("typeorm");
let InvolucradoJuridico = class InvolucradoJuridico extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { razon_social: { required: true, type: () => String }, tipoDocumento: { required: true, type: () => require("../../tipo-documentos/entities/tipo-documento.entity").TipoDocumento }, nro_documento: { required: true, type: () => String }, telefono: { required: true, type: () => String }, direccion: { required: true, type: () => String }, correo: { required: true, type: () => String }, sector: { required: true, type: () => require("../../sector-involucrados/entities/sector-involucrado.entity").SectorInvolucrado }, clasificacion: { required: true, type: () => require("../../clasificacion-involucrados/entities/clasificacion-involucrado.entity").ClasificacionInvolucrado } };
    }
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        length: 150,
        name: 'razon_social',
    }),
    __metadata("design:type", String)
], InvolucradoJuridico.prototype, "razon_social", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_documento_entity_1.TipoDocumento, (tipoDocumento) => tipoDocumento.involucrados),
    __metadata("design:type", tipo_documento_entity_1.TipoDocumento)
], InvolucradoJuridico.prototype, "tipoDocumento", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        length: 11,
        name: 'nro_documento',
    }),
    __metadata("design:type", String)
], InvolucradoJuridico.prototype, "nro_documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 10, name: 'telefono' }),
    __metadata("design:type", String)
], InvolucradoJuridico.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 150, name: 'direccion' }),
    __metadata("design:type", String)
], InvolucradoJuridico.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 100, name: 'correo' }),
    __metadata("design:type", String)
], InvolucradoJuridico.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sector_involucrado_entity_1.SectorInvolucrado, (sectorInvolucrado) => sectorInvolucrado.involucradosSec),
    __metadata("design:type", sector_involucrado_entity_1.SectorInvolucrado)
], InvolucradoJuridico.prototype, "sector", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clasificacion_involucrado_entity_1.ClasificacionInvolucrado, (clasificacionInvolucrado) => clasificacionInvolucrado.involucradosClas),
    __metadata("design:type", clasificacion_involucrado_entity_1.ClasificacionInvolucrado)
], InvolucradoJuridico.prototype, "clasificacion", void 0);
InvolucradoJuridico = __decorate([
    (0, typeorm_1.Entity)('co_involucrado_juridico'),
    (0, typeorm_1.Unique)('nro_documento', ['nro_documento'])
], InvolucradoJuridico);
exports.InvolucradoJuridico = InvolucradoJuridico;
//# sourceMappingURL=involucrado-juridico.entity.js.map