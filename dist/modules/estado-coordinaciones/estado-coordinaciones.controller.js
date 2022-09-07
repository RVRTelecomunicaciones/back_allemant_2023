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
exports.EstadoCoordinacionesController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_estado_coordinacion_dto_1 = require("./dto/create-estado-coordinacion.dto");
const update_estado_coordinacion_dto_1 = require("./dto/update-estado-coordinacion.dto");
const estado_coordinaciones_service_1 = require("./estado-coordinaciones.service");
let EstadoCoordinacionesController = class EstadoCoordinacionesController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createArea(createDto) {
        return await this.service.createEstadoCoordinacion(createDto);
    }
    async modifyAreaById(id, updateDto) {
        return await this.service.updateEstadoCoordinacionById(id, updateDto);
    }
    async destroyAreaById(id) {
        return await this.service.deleteEstadoCoordinacion(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Estados de Coordinación',
        description: 'Consulta de Estados de Coordinación',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Estados de Coordinación Paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], EstadoCoordinacionesController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Estados de Coordinación',
        description: 'Creación de Estados de Coordinación de la Empresa',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Estados de Coordinación creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_estado_coordinacion_dto_1.CreateEstadoCoordinacionDto]),
    __metadata("design:returntype", Promise)
], EstadoCoordinacionesController.prototype, "createArea", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Estados de Coordinación',
        description: 'Modificar el Estados de Coordinación correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Estados de Coordinación modificado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_estado_coordinacion_dto_1.UpdateEstadoCoordinacionDto]),
    __metadata("design:returntype", Promise)
], EstadoCoordinacionesController.prototype, "modifyAreaById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Estado de Coordinación',
        description: 'Eliminar Estado de Coordinación basado en la identificación del Area',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Estado de Coordinación eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], EstadoCoordinacionesController.prototype, "destroyAreaById", null);
EstadoCoordinacionesController = __decorate([
    (0, swagger_1.ApiTags)('ESTADO-COORDINACIONES'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('estado-coordinaciones/'),
    __metadata("design:paramtypes", [estado_coordinaciones_service_1.EstadoCoordinacionesService])
], EstadoCoordinacionesController);
exports.EstadoCoordinacionesController = EstadoCoordinacionesController;
//# sourceMappingURL=estado-coordinaciones.controller.js.map