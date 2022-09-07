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
exports.CreateServicioDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const servicio_entity_1 = require("../entities/servicio.entity");
class CreateServicioDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: false, type: () => String, minLength: 3, maxLength: 60 }, tipoServicio: { required: false, type: () => require("../entities/servicio.entity").Servicio }, requisito: { required: false, type: () => [require("../../requisitos/entities/requisito.entity").Requisito] } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Nombre de Servicio',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere Obligatoriamente ingresar un nombre del Servicio',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción de la Moneda',
    }),
    (0, class_validator_1.Length)(3, 60, {
        message: 'Se requiere de 3 a 60 caracteres',
    }),
    __metadata("design:type", String)
], CreateServicioDto.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Seleccione Tipo de Servicio',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere Obligatoriamente seleccionar un Tipo de Servicio',
    }),
    __metadata("design:type", servicio_entity_1.Servicio)
], CreateServicioDto.prototype, "tipoServicio", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: true,
        description: 'Seleccione Tipo de Servicio',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere Obligatoriamente seleccionar un Tipo de Servicio',
    }),
    __metadata("design:type", Array)
], CreateServicioDto.prototype, "requisito", void 0);
exports.CreateServicioDto = CreateServicioDto;
//# sourceMappingURL=create-servicio.dto.js.map