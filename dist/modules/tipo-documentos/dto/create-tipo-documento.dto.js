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
exports.CreateTipoDocumentoDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTipoDocumentoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo: { required: true, type: () => String, minLength: 1, maxLength: 2 }, abreviatura: { required: true, type: () => String, minLength: 3, maxLength: 20 }, nombre: { required: true, type: () => String, minLength: 4, maxLength: 50 }, longitud: { required: true, type: () => Number } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Código del Tipo de Documento' }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere obligatoriamente ingresar un Código',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Código',
    }),
    (0, class_validator_1.Length)(1, 2, {
        message: 'Se requiere de 1 a 2 caracteres',
    }),
    __metadata("design:type", String)
], CreateTipoDocumentoDto.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Abreviatura del Tipo de Documento',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere obligatoriamente ingresar una Abreviatura',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción de la Abreviatura',
    }),
    (0, class_validator_1.Length)(3, 20, {
        message: 'Se requiere de 3 a 20 caracteres',
    }),
    __metadata("design:type", String)
], CreateTipoDocumentoDto.prototype, "abreviatura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Nombre del Tipo de Documento' }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere obligatoriamente ingresar un Tipo de Documento',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Tipo de Documento',
    }),
    (0, class_validator_1.Length)(4, 50, {
        message: 'Se requiere de 4 a 50 caracteres',
    }),
    __metadata("design:type", String)
], CreateTipoDocumentoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Longitud del Tipo de Documento',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere obligatoriamente ingresar una longitud',
    }),
    (0, class_validator_1.IsInt)({
        message: 'Solo se permiten números',
    }),
    __metadata("design:type", Number)
], CreateTipoDocumentoDto.prototype, "longitud", void 0);
exports.CreateTipoDocumentoDto = CreateTipoDocumentoDto;
//# sourceMappingURL=create-tipo-documento.dto.js.map