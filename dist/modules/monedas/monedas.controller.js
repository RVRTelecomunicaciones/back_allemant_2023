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
exports.MonedasController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_moneda_dto_1 = require("./dto/create-moneda.dto");
const update_moneda_dto_1 = require("./dto/update-moneda.dto");
const monedas_service_1 = require("./monedas.service");
let MonedasController = class MonedasController {
    constructor(monedaService) {
        this.monedaService = monedaService;
    }
    async listar(pageOptionsDto) {
        return this.monedaService.findAll(pageOptionsDto);
    }
    async createArea(createMonedaDto) {
        return await this.monedaService.createMoneda(createMonedaDto);
    }
    async modifyAreaById(id, updateMonedaDto) {
        return await this.monedaService.updateMonedaById(id, updateMonedaDto);
    }
    async destroyMonedaById(id) {
        return await this.monedaService.deleteMoneda(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Monedas',
        description: 'Consulta de Monedas',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Monedas Paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], MonedasController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Moneda',
        description: 'Creación de Moneda',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Moneda creada correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_moneda_dto_1.CreateMonedaDto]),
    __metadata("design:returntype", Promise)
], MonedasController.prototype, "createArea", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Moneda',
        description: 'Modificar la Moneda correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Moneda modificada correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_moneda_dto_1.UpdateMonedaDto]),
    __metadata("design:returntype", Promise)
], MonedasController.prototype, "modifyAreaById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Moneda',
        description: 'Eliminar Moneda basado en la identificación',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Moneda eliminada correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MonedasController.prototype, "destroyMonedaById", null);
MonedasController = __decorate([
    (0, swagger_1.ApiTags)('MONEDAS'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('monedas/'),
    __metadata("design:paramtypes", [monedas_service_1.MonedasService])
], MonedasController);
exports.MonedasController = MonedasController;
//# sourceMappingURL=monedas.controller.js.map