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
exports.TipoServiciosController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_tipo_servicio_dto_1 = require("./dto/create-tipo-servicio.dto");
const update_tipo_servicio_dto_1 = require("./dto/update-tipo-servicio.dto");
const tipo_servicios_service_1 = require("./tipo-servicios.service");
let TipoServiciosController = class TipoServiciosController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createTipoServicio(createDto) {
        return await this.service.createTipoServicio(createDto);
    }
    async modifyTipoServicioById(id, updateDto) {
        return await this.service.updateTipoServicioById(id, updateDto);
    }
    async destroyTipoServicioById(id) {
        return await this.service.deleteTipoServicio(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Tipo de Servicios',
        description: 'Consulta de Tipo de Servicios',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Tipo de Servicios paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], TipoServiciosController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Tipo de Servicios',
        description: 'Creación de Tipo de Servicios',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Servicios creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_servicio_dto_1.CreateTipoServicioDto]),
    __metadata("design:returntype", Promise)
], TipoServiciosController.prototype, "createTipoServicio", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Tipo de Servicio',
        description: 'Modificar el Tipo de Servicio correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Servicio modificado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipo_servicio_dto_1.UpdateTipoServicioDto]),
    __metadata("design:returntype", Promise)
], TipoServiciosController.prototype, "modifyTipoServicioById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Tipo de Servicios',
        description: 'Eliminar Tipo de Servicio',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Servicio eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoServiciosController.prototype, "destroyTipoServicioById", null);
TipoServiciosController = __decorate([
    (0, swagger_1.ApiTags)('TIPO-SERVICIOS'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('tipo-servicios/'),
    __metadata("design:paramtypes", [tipo_servicios_service_1.TipoServiciosService])
], TipoServiciosController);
exports.TipoServiciosController = TipoServiciosController;
//# sourceMappingURL=tipo-servicios.controller.js.map