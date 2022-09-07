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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCotizacionesController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_tipo_cotizacion_dto_1 = require("./dto/create-tipo-cotizacion.dto");
const update_tipo_cotizacion_dto_1 = require("./dto/update-tipo-cotizacion.dto");
const tipo_cotizaciones_service_1 = require("./tipo-cotizaciones.service");
let TipoCotizacionesController = class TipoCotizacionesController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createTipoCotizacion(createDto) {
        return await this.service.createTipoCotizacion(createDto);
    }
    async modifyTipoCotizacionById(id, updateDto) {
        return await this.service.updateTipoCotizacionById(id, updateDto);
    }
    async destroyTipoCotizacionById(id) {
        return await this.service.deleteTipoCotizacion(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar Tipo de Cotización',
        description: 'Consulta de Tipo de Cotizaciones',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Tipo de Cotización paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], TipoCotizacionesController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Tipo de Cotización',
        description: 'Creación de Tipo de Cotizaciones',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de cotización creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_cotizacion_dto_1.CreateTipoCotizacionDto]),
    __metadata("design:returntype", Promise)
], TipoCotizacionesController.prototype, "createTipoCotizacion", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Tipo de Cotización',
        description: 'Modificar el Tipo de Cotización',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipo_cotizacion_dto_1.UpdateTipoCotizacionDto]),
    __metadata("design:returntype", Promise)
], TipoCotizacionesController.prototype, "modifyTipoCotizacionById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Tipo de Cotización',
        description: 'Eliminar Tipo de Cotización',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Cotización eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoCotizacionesController.prototype, "destroyTipoCotizacionById", null);
TipoCotizacionesController = __decorate([
    (0, swagger_1.ApiTags)('TIPO-COTIZACIONES'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('tipo-cotizaciones/'),
    __metadata("design:paramtypes", [tipo_cotizaciones_service_1.TipoCotizacionesService])
], TipoCotizacionesController);
exports.TipoCotizacionesController = TipoCotizacionesController;
//# sourceMappingURL=tipo-cotizaciones.controller.js.map