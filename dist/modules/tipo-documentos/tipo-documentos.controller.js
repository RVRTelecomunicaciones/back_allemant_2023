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
exports.TipoDocumentosController = void 0;
const openapi = require("@nestjs/swagger");
const api_auth_1 = require("../../decorators/api.auth");
const page_metaoption_dto_1 = require("../../dto/page-metaoption.dto");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_tipo_documento_dto_1 = require("./dto/create-tipo-documento.dto");
const update_tipo_documento_dto_1 = require("./dto/update-tipo-documento.dto");
const tipo_documentos_service_1 = require("./tipo-documentos.service");
let TipoDocumentosController = class TipoDocumentosController {
    constructor(service) {
        this.service = service;
    }
    async listar(pageOptionsDto) {
        return this.service.findAll(pageOptionsDto);
    }
    async createRole(createDto) {
        return await this.service.createTipoDocumento(createDto);
    }
    async modifyTipoDocumentoById(id, updateDto) {
        return await this.service.updateTipoDocumentoById(id, updateDto);
    }
    async destroyTipoDocumentoById(id) {
        return await this.service.deleteTipoDocumento(id);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Consultar lista de Tipo de Documentos',
        description: 'Consulta de Tipo de Documentos',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Lista de Tipo de Documentos paginada',
    }),
    (0, common_1.Get)('list'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [page_metaoption_dto_1.PageOptionsDto]),
    __metadata("design:returntype", Promise)
], TipoDocumentosController.prototype, "listar", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Crear Tipo de Documentos',
        description: 'Creación de Tipo de Documentos',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Documentos creado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: common_1.HttpStatus.CREATED, type: String }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_tipo_documento_dto_1.CreateTipoDocumentoDto]),
    __metadata("design:returntype", Promise)
], TipoDocumentosController.prototype, "createRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Modificar Tipo de Documento',
        description: 'Modificar el Tipo de Documento correspondiente',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Documento modificado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Patch)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_tipo_documento_dto_1.UpdateTipoDocumentoDto]),
    __metadata("design:returntype", Promise)
], TipoDocumentosController.prototype, "modifyTipoDocumentoById", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: 'Eliminar Tipo de Documento',
        description: 'Eliminar Tipo de Documento',
    }),
    (0, swagger_1.ApiOkResponse)({
        type: String,
        description: 'Tipo de Documento eliminado correctamente',
    }),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: common_1.HttpStatus.OK, type: String }),
    __param(0, (0, common_1.Param)('id', new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TipoDocumentosController.prototype, "destroyTipoDocumentoById", null);
TipoDocumentosController = __decorate([
    (0, swagger_1.ApiTags)('TIPO-DOCUMENTOS'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, api_auth_1.ApiAuth)(),
    (0, common_1.Controller)('tipo-documentos/'),
    __metadata("design:paramtypes", [tipo_documentos_service_1.TipoDocumentosService])
], TipoDocumentosController);
exports.TipoDocumentosController = TipoDocumentosController;
//# sourceMappingURL=tipo-documentos.controller.js.map