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
exports.DesglosesController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const desgloses_service_1 = require("./desgloses.service");
const create_desglose_dto_1 = require("./dto/create-desglose.dto");
const update_desglose_dto_1 = require("./dto/update-desglose.dto");
let DesglosesController = class DesglosesController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createDesglose(createDto) {
        return await this.service.createDesglose(createDto);
    }
    async modifyDesgloseById(id, updateDto) {
        return await this.service.updateDesgloseById(id, updateDto);
    }
    async destroyAreaById(id) {
        return await this.service.deleteDesglose(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Desgloses',
        description: 'Consulta de Desgloses',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Desglose Paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], DesglosesController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Desglose',
        description: 'Creación de Desglose',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Desglose creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_desglose_dto_1.CreateDesgloseDto]),
    __metadata("design:returntype", Promise)
], DesglosesController.prototype, "createDesglose", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Desglose',
        description: 'Modificar el Desglose correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Desglose modificado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_desglose_dto_1.UpdateDesgloseDto]),
    __metadata("design:returntype", Promise)
], DesglosesController.prototype, "modifyDesgloseById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Desglose',
        description: 'Eliminar Desglose basado en la identificación',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Desglose eliminada correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DesglosesController.prototype, "destroyAreaById", null);
DesglosesController = __decorate([
    (0, swagger_1.ApiTags)('DESGLOSES'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('desgloses/'),
    __metadata("design:paramtypes", [desgloses_service_1.DesglosesService])
], DesglosesController);
exports.DesglosesController = DesglosesController;
//# sourceMappingURL=desgloses.controller.js.map