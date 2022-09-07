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
exports.UpdateTipoDocumentoDto = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateTipoDocumentoDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo: { required: true, type: () => String }, abreviatura: { required: true, type: () => String }, nombre: { required: true, type: () => String }, longitud: { required: true, type: () => Number, maximum: 2 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Código del Tipo de Documento' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Código',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.codigo != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTipoDocumentoDto.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Abreviatura del Tipo de Documento',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Abreviatura',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.abreviatura != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTipoDocumentoDto.prototype, "abreviatura", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Nombre del Tipo de Documento' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Tipo de Documento',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.nombre != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateTipoDocumentoDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Longitud del Tipo de Documento',
    }),
    (0, class_validator_1.IsInt)({
        message: 'Solo se permiten números',
    }),
    (0, class_validator_1.Max)(2, {
        message: 'requieren maximo 2 caracteres',
    }),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], UpdateTipoDocumentoDto.prototype, "longitud", void 0);
exports.UpdateTipoDocumentoDto = UpdateTipoDocumentoDto;
//# sourceMappingURL=update-tipo-documento.dto.js.map