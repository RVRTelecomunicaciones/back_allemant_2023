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
exports.CreateMonedaDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateMonedaDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo: { required: true, type: () => String, minLength: 3, maxLength: 3 }, simbolo: { required: true, type: () => String, minLength: 1, maxLength: 10 }, nombre: { required: true, type: () => String, minLength: 3, maxLength: 25 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Código de Moneda',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere Obligatoriamente ingresar un Código',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Código',
    }),
    (0, class_validator_1.Length)(3, 3, {
        message: 'Se requiere 3 caracteres',
    }),
    __metadata("design:type", String)
], CreateMonedaDto.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Símbolo de Moneda',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere Obligatoriamente ingresar un Símbolo',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Símbolo',
    }),
    (0, class_validator_1.Length)(1, 10, {
        message: 'Se requiere de 1 a 10 caracteres',
    }),
    __metadata("design:type", String)
], CreateMonedaDto.prototype, "simbolo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Nombre de Moneda',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere Obligatoriamente ingresar un Nombre de Moneda',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción de la Moneda',
    }),
    (0, class_validator_1.Length)(3, 25, {
        message: 'Se requiere de 5 a 100 caracteres',
    }),
    __metadata("design:type", String)
], CreateMonedaDto.prototype, "nombre", void 0);
exports.CreateMonedaDto = CreateMonedaDto;
//# sourceMappingURL=create-moneda.dto.js.map