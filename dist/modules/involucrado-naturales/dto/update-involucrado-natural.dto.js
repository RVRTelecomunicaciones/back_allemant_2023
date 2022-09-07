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
exports.UpdateInvolucradoNaturalDto = void 0;
const openapi = require("@nestjs/swagger");
const tipo_documento_entity_1 = require("../../tipo-documentos/entities/tipo-documento.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateInvolucradoNaturalDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { paterno: { required: true, type: () => String }, materno: { required: true, type: () => String }, nombre: { required: true, type: () => String }, tipoDocumento: { required: true, type: () => require("../../tipo-documentos/entities/tipo-documento.entity").TipoDocumento }, nro_documento: { required: true, type: () => String }, telefono: { required: true, type: () => String }, celular1: { required: true, type: () => String }, celular2: { required: true, type: () => String }, direccion: { required: true, type: () => String }, correo: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Apellido Paterno del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Apellido Paterno',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.paterno != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "paterno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Apellido Materno del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Apellido Materno',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.materno != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "materno", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Nombre del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Nombre',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.nombre != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Seleccione Tipo de Documento' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", tipo_documento_entity_1.TipoDocumento)
], UpdateInvolucradoNaturalDto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Número de Documento del Involucrado',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.nro_documento != 0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "nro_documento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Teléfono del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Teléfono',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.telefono != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Celular 1 del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Celular 1',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.celular1 != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "celular1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Celular 2 del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Celular 2',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.celular2 != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "celular2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Dirección del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Dirección',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.direccion != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Correo del Involucrado',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Correo',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.correo != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvolucradoNaturalDto.prototype, "correo", void 0);
exports.UpdateInvolucradoNaturalDto = UpdateInvolucradoNaturalDto;
//# sourceMappingURL=update-involucrado-natural.dto.js.map