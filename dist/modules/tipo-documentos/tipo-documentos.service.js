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
exports.TipoDocumentosService = void 0;
const page_meta_dto_1 = require("../../dto/page-meta.dto");
const page_dto_1 = require("../../dto/page.dto");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipo_documento_entity_1 = require("./entities/tipo-documento.entity");
let TipoDocumentosService = class TipoDocumentosService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(pageOptionsDto) {
        const queryBuilder = this.repository.createQueryBuilder('co_documento_tipo');
        queryBuilder
            .orderBy('co_documento_tipo.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
        return new page_dto_1.PageDto(entities, pageMetaDto);
    }
    async createTipoDocumento(createDto) {
        const { nombre } = createDto;
        const findNameResult = await this.repository.findOne({
            where: { nombre },
            select: ['id'],
        });
        if (findNameResult) {
            throw new common_1.HttpException(`${nombre} el Tipo de Documento actual ya existe y no se puede crear repetidamente`, common_1.HttpStatus.OK);
        }
        const tipoDocumento = this.repository.create(createDto);
        await this.repository.save(tipoDocumento);
        return 'Tipo de Documento creado con éxito';
    }
    async updateTipoDocumentoById(id, updateDto) {
        const existTipoDocumento = await this.repository.findOne({ where: { id: id } });
        console.log('Update Tipo de Documento');
        console.log(existTipoDocumento);
        if (!existTipoDocumento) {
            throw new common_1.NotFoundException(`Tipo de Documento id ${id} no existe`);
        }
        const updateResponse = await this.repository.update(id, updateDto);
        if (updateResponse.affected) {
            return 'Modificación exitosa';
        }
        else {
            return 'Error de modificación';
        }
    }
    async deleteTipoDocumento(id) {
        const existTipoDocumento = await this.repository.findOne({ where: { id: id } });
        if (!existTipoDocumento) {
            throw new common_1.HttpException(`Tipo de Documento con id ${id} no existe`, common_1.HttpStatus.OK);
        }
        const deleteResponse = await this.repository.softDelete(id);
        if (deleteResponse.affected) {
            return 'Eliminado con éxito';
        }
        else {
            return 'No se pudo eliminar';
        }
    }
};
TipoDocumentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_documento_entity_1.TipoDocumento)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoDocumentosService);
exports.TipoDocumentosService = TipoDocumentosService;
//# sourceMappingURL=tipo-documentos.service.js.map