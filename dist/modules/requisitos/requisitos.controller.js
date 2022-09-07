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
exports.RequisitosController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_requisito_dto_1 = require("./dto/create-requisito.dto");
const update_requisito_1 = require("./dto/update-requisito");
const requisitos_service_1 = require("./requisitos.service");
let RequisitosController = class RequisitosController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createRequisito(createDto) {
        return await this.service.createRequisito(createDto);
    }
    async modifyRequisitoById(id, updateDto) {
        return await this.service.updateRequisitoById(id, updateDto);
    }
    async destroyRequisitoById(id) {
        return await this.service.deleteRequisito(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Requistos',
        description: 'Consulta de Requistos',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Requistos Paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], RequisitosController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Requisito',
        description: 'Creación de Requisitos',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Requisito creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_requisito_dto_1.CreateRequisitoDto]),
    __metadata("design:returntype", Promise)
], RequisitosController.prototype, "createRequisito", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Requisito',
        description: 'Modificar el Requisito correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Requisito modificado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_requisito_1.UpdateRequisitoDto]),
    __metadata("design:returntype", Promise)
], RequisitosController.prototype, "modifyRequisitoById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Requisito',
        description: 'Eliminar Requisito basado en la identificación',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Requisito eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RequisitosController.prototype, "destroyRequisitoById", null);
RequisitosController = __decorate([
    (0, swagger_1.ApiTags)('REQUISITOS'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('requisitos/'),
    __metadata("design:paramtypes", [requisitos_service_1.RequisitosService])
], RequisitosController);
exports.RequisitosController = RequisitosController;
//# sourceMappingURL=requisitos.controller.js.map