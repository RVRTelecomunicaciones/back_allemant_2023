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
exports.TipoCotizacion = void 0;
const openapi = require("@nestjs/swagger");
const shared_entity_1 = require("../../shared/entities/shared.entity");
const typeorm_1 = require("typeorm");
let TipoCotizacion = class TipoCotizacion extends shared_entity_1.SharedEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({
        type: 'varchar',
        length: 50,
        name: 'name',
        nullable: false,
    }),
    __metadata("design:type", String)
], TipoCotizacion.prototype, "name", void 0);
TipoCotizacion = __decorate([
    (0, typeorm_1.Entity)('co_tipo_cotizacion')
], TipoCotizacion);
exports.TipoCotizacion = TipoCotizacion;
//# sourceMappingURL=tipocotizacion.entity.js.map