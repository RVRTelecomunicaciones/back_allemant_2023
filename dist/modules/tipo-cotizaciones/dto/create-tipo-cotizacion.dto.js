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
exports.CreateTipoCotizacionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateTipoCotizacionDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { nombre: { required: true, type: () => String, minLength: 4, maxLength: 20 } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: true, description: 'Nombre del Tipo de Cotización' }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'Requiere obligatoriamente ingresar un Tipo de Cotización',
    }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Tipo de Cotización',
    }),
    (0, class_validator_1.Length)(4, 20, {
        message: 'Se requiere de 4 a 20 caracteres',
    }),
    __metadata("design:type", String)
], CreateTipoCotizacionDto.prototype, "nombre", void 0);
exports.CreateTipoCotizacionDto = CreateTipoCotizacionDto;
//# sourceMappingURL=create-tipo-cotizacion.dto.js.map