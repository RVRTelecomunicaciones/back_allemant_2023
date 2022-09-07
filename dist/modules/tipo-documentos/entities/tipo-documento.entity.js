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
exports.TipoDocumento = void 0;
const openapi = require("@nestjs/swagger");
const involucrado_natural_entity_1 = require("../../involucrado-naturales/entities/involucrado-natural.entity");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const typeorm_1 = require("typeorm");
let TipoDocumento = class TipoDocumento extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo: { required: true, type: () => String }, abreviatura: { required: true, type: () => String }, nombre: { required: true, type: () => String }, involucrados: { required: true, type: () => [require("../../involucrado-naturales/entities/involucrado-natural.entity").InvolucradoNatural] }, longitud: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 2, name: 'codigo' }),
    __metadata("design:type", String)
], TipoDocumento.prototype, "codigo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 20, name: 'abreviatura' }),
    __metadata("design:type", String)
], TipoDocumento.prototype, "abreviatura", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false, length: 50, name: 'nombre' }),
    __metadata("design:type", String)
], TipoDocumento.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => involucrado_natural_entity_1.InvolucradoNatural, (involucrado) => involucrado.tipoDocumento),
    __metadata("design:type", Array)
], TipoDocumento.prototype, "involucrados", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false, name: 'longitud' }),
    __metadata("design:type", Number)
], TipoDocumento.prototype, "longitud", void 0);
TipoDocumento = __decorate([
    (0, typeorm_1.Entity)('co_documento_tipo')
], TipoDocumento);
exports.TipoDocumento = TipoDocumento;
//# sourceMappingURL=tipo-documento.entity.js.map