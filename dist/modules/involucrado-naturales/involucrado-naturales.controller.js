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
exports.InvolucradoNaturalesController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_involucrado_natural_dto_1 = require("./dto/create-involucrado-natural.dto");
const update_involucrado_natural_dto_1 = require("./dto/update-involucrado-natural.dto");
const involucrado_naturales_service_1 = require("./involucrado-naturales.service");
let InvolucradoNaturalesController = class InvolucradoNaturalesController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createInvolucradoNatural(createDto) {
        return await this.service.createInvolucradoNatural(createDto);
    }
    async modifyInvolucradoNaturalById(id, updateDto) {
        return await this.service.updateInvolucradoNaturalById(id, updateDto);
    }
    async destroyInvolucradoNaturalById(id) {
        return await this.service.deleteInvolucradoNatural(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Involucrado Naturales',
        description: 'Consulta de Involucrado Naturales',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Involucrado Naturales Paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], InvolucradoNaturalesController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Involucrado Naturales',
        description: 'Creación de Involucrado Naturales',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Involucrado creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_involucrado_natural_dto_1.CreateInvolucradoNaturalDto]),
    __metadata("design:returntype", Promise)
], InvolucradoNaturalesController.prototype, "createInvolucradoNatural", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Involucrado Natural',
        description: 'Modificar la Involucrado Natural correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Involucrado modificada correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_involucrado_natural_dto_1.UpdateInvolucradoNaturalDto]),
    __metadata("design:returntype", Promise)
], InvolucradoNaturalesController.prototype, "modifyInvolucradoNaturalById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Involucrado Natural',
        description: 'Eliminar Involucrado Natural basado en la identificación',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Involucrado eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvolucradoNaturalesController.prototype, "destroyInvolucradoNaturalById", null);
InvolucradoNaturalesController = __decorate([
    (0, swagger_1.ApiTags)('INVOLUCRADO-NATURALES'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('involucrado-naturales/'),
    __metadata("design:paramtypes", [involucrado_naturales_service_1.InvolucradoNaturalesService])
], InvolucradoNaturalesController);
exports.InvolucradoNaturalesController = InvolucradoNaturalesController;
//# sourceMappingURL=involucrado-naturales.controller.js.map