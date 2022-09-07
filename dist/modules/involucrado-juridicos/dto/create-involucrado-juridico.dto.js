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
exports.CreateInvolucradoJuridicoDto = void 0;
const openapi = require("@nestjs/swagger");
const clasificacion_involucrado_entity_1 = require("../../clasificacion-involucrados/entities/clasificacion-involucrado.entity");
const sector_involucrado_entity_1 = require("../../sector-involucrados/entities/sector-involucrado.entity");
const tipo_documento_entity_1 = require("../../tipo-documentos/entities/tipo-documento.entity");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateInvolucradoJuridicoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { razon_social: { required: true, type: () => String, minLength: 4, maxLength: 150 }, tipoDocumento: { required: true, type: () => require("../../tipo-documentos/entities/tipo-documento.entity").TipoDocumento }, nro_documento: { required: true, type: () => String }, telefono: { required: true, type: () => String }, direccion: { required: true, type: () => String, minLength: 4, maxLength: 150 }, correo: { required: true, type: () => String, minLength: 4, maxLength: 100 }, sector: { required: true, type: () => require("../../sector-involucrados/entities/sector-involucrado.entity").SectorInvolucrado }, clasificacion: { required: true, type: () => require("../../clasificacion-involucrados/entities/clasificacion-involucrado.entity").ClasificacionInvolucrado } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Nombre del Involucrado' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Requiere obligatoriamente ingresar un Nombre' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Nombre del Involucrado',
    }),
    (0, class_validator_1.Length)(4, 150, {
        message: 'se requiere de 4 a 50 caracteres',
    }),
    __metadata("design:type", String)
], CreateInvolucradoJuridicoDto.prototype, "razon_social", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Seleccione Tipo de Documento' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", tipo_documento_entity_1.TipoDocumento)
], CreateInvolucradoJuridicoDto.prototype, "tipoDocumento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Número de Documento' }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere obligatoriamente ingresar el Número de Documento',
    }),
    __metadata("design:type", String)
], CreateInvolucradoJuridicoDto.prototype, "nro_documento", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Telefono del Involucrado' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Telefono del Involucrado',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvolucradoJuridicoDto.prototype, "telefono", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Dirección del Involucrado' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Dirección del Involucrado',
    }),
    (0, class_validator_1.Length)(4, 150, {
        message: 'se requiere de 4 a 150 caracteres',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvolucradoJuridicoDto.prototype, "direccion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Correo del Involucrado' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Correo del Involucrado',
    }),
    (0, class_validator_1.Length)(4, 100, {
        message: 'se requiere de 4 a 100 caracteres',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvolucradoJuridicoDto.prototype, "correo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Seleccione Sector' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", sector_involucrado_entity_1.SectorInvolucrado)
], CreateInvolucradoJuridicoDto.prototype, "sector", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Seleccione Clasificacion' }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", clasificacion_involucrado_entity_1.ClasificacionInvolucrado)
], CreateInvolucradoJuridicoDto.prototype, "clasificacion", void 0);
exports.CreateInvolucradoJuridicoDto = CreateInvolucradoJuridicoDto;
//# sourceMappingURL=create-involucrado-juridico.dto.js.map