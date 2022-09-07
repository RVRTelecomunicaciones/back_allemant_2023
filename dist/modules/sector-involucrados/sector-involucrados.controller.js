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
exports.SectorInvolucradosController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_sector_involucrado_dto_1 = require("./dto/create-sector-involucrado.dto");
const update_sector_involucrado_dto_1 = require("./dto/update-sector-involucrado.dto");
const sector_involucrados_service_1 = require("./sector-involucrados.service");
let SectorInvolucradosController = class SectorInvolucradosController {
    constructor(sectorInvolucradoService) {
        this.sectorInvolucradoService = sectorInvolucradoService;
    }
    async listar(pageOptionsDto) {
        return this.sectorInvolucradoService.findAll(pageOptionsDto);
    }
    async createRole(createSectorInvolucradoDto) {
        return await this.sectorInvolucradoService.createSectorInvolucrado(createSectorInvolucradoDto);
    }
    async modifyTipoServicioById(id, updateSectorInvolucradoDto) {
        return await this.sectorInvolucradoService.updateSectorInvolucradoById(id, updateSectorInvolucradoDto);
    }
    async destroyTipoServicioById(id) {
        return await this.sectorInvolucradoService.deleteSectorInvolucrado(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Sectores de Involucrados',
        description: 'Consulta de Sectores de Involucrados',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Sectores de Involucrados paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], SectorInvolucradosController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Sector de Involucrados',
        description: 'Creación de Sector de Involucrados',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Sector de Involucrados creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sector_involucrado_dto_1.CreateSectorInvolucradoDto]),
    __metadata("design:returntype", Promise)
], SectorInvolucradosController.prototype, "createRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Sector de Involucrados',
        description: 'Modificar el Sector de Involucrado correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Sector de Involucrados modificado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_sector_involucrado_dto_1.UpdateSectorInvolucradoDto]),
    __metadata("design:returntype", Promise)
], SectorInvolucradosController.prototype, "modifyTipoServicioById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Sector de Involucrados',
        description: 'Eliminar Sector de Involucrados',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Sector de Involucrados eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SectorInvolucradosController.prototype, "destroyTipoServicioById", null);
SectorInvolucradosController = __decorate([
    (0, swagger_1.ApiTags)('SECTOR-INVOLUCRADOS'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('sector-involucrados/'),
    __metadata("design:paramtypes", [sector_involucrados_service_1.SectorInvolucradosService])
], SectorInvolucradosController);
exports.SectorInvolucradosController = SectorInvolucradosController;
//# sourceMappingURL=sector-involucrados.controller.js.map