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
exports.UpdateMonedaDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateMonedaDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { codigo: { required: true, type: () => String }, simbolo: { required: true, type: () => String }, nombre: { required: true, type: () => String } };
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Código de Moneda' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Código',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.codigo != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMonedaDto.prototype, "codigo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Símbolo de Moneda' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción del Símbolo',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.simbolo != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMonedaDto.prototype, "simbolo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Nombre de Moneda' }),
    (0, class_validator_1.IsString)({
        message: 'Ingrese texto para la descripción de la Moneda',
    }),
    (0, class_validator_1.ValidateIf)((o) => o.nombre != ''),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateMonedaDto.prototype, "nombre", void 0);
exports.UpdateMonedaDto = UpdateMonedaDto;
//# sourceMappingURL=update-moneda.dto.js.map