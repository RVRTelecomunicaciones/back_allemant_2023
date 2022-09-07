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
exports.ServiciosController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_servicio_dto_1 = require("./dto/create-servicio.dto");
const update_servicio_dto_1 = require("./dto/update-servicio.dto");
const servicios_service_1 = require("./servicios.service");
let ServiciosController = class ServiciosController {
    constructor(servicioService) {
        this.servicioService = servicioService;
    }
    async listar(pageOptionsDto) {
        return this.servicioService.findAll(pageOptionsDto);
    }
    async createServicio(createServicioDto) {
        return await this.servicioService.createServicioRequisito(createServicioDto);
    }
    async modifyAreaById(id, updateServicioDto) {
        return await this.servicioService.updateServicioById(id, updateServicioDto);
    }
    async destroyServicioById(id) {
        return await this.servicioService.deleteServicio(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Servicios',
        description: 'Consulta de Servicios',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Servicios Paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Servicio',
        description: 'Creación de Servicio',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Servicio creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_servicio_dto_1.CreateServicioDto]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "createServicio", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Servicio',
        description: 'Modificar la Servicio correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Servicio modificada correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_servicio_dto_1.UpdateServicioDto]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "modifyAreaById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Servicio',
        description: 'Eliminar Servicio basado en la identificación',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Servicio eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ServiciosController.prototype, "destroyServicioById", null);
ServiciosController = __decorate([
    (0, swagger_1.ApiTags)('SERVICIOS'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('servicios/'),
    __metadata("design:paramtypes", [servicios_service_1.ServiciosService])
], ServiciosController);
exports.ServiciosController = ServiciosController;
//# sourceMappingURL=servicios.controller.js.map