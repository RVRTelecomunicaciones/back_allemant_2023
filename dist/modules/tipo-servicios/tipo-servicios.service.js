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
exports.TipoServiciosService = void 0;
const page_meta_dto_1 = require("../../dto/page-meta.dto");
const page_dto_1 = require("../../dto/page.dto");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const tipo_servicio_entity_1 = require("./entities/tipo-servicio.entity");
let TipoServiciosService = class TipoServiciosService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(pageOptionsDto) {
        const queryBuilder = this.repository.createQueryBuilder('co_servicio_tipo');
        queryBuilder
            .orderBy('co_servicio_tipo.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
        return new page_dto_1.PageDto(entities, pageMetaDto);
    }
    async createTipoServicio(createDto) {
        const { nombre } = createDto;
        const findNameResult = await this.repository.findOne({
            where: { nombre },
            select: ['id'],
        });
        if (findNameResult) {
            throw new common_1.HttpException(`${nombre} el Tipo de Servicio actual ya existe y no se puede crear repetidamente`, common_1.HttpStatus.OK);
        }
        const tipoServicio = this.repository.create(createDto);
        await this.repository.save(tipoServicio);
        return 'Tipo de Servicio creado con éxito';
    }
    async updateTipoServicioById(id, updateDto) {
        const existTipoServicio = await this.repository.findOne({ where: { id: id } });
        console.log('Update Tipo de Servicio');
        console.log(existTipoServicio);
        if (!existTipoServicio) {
            throw new common_1.NotFoundException(`Tipo de Servicio id ${id} no existe`);
        }
        const updateResponse = await this.repository.update(id, updateDto);
        if (updateResponse.affected) {
            return 'Modificación exitosa';
        }
        else {
            return 'Error de modificación';
        }
    }
    async deleteTipoServicio(id) {
        const existTipoServicio = await this.repository.findOne({ where: { id: id } });
        if (!existTipoServicio) {
            throw new common_1.HttpException(`Tipo de Servicio con id ${id} no existe`, common_1.HttpStatus.OK);
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
TipoServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tipo_servicio_entity_1.TipoServicio)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TipoServiciosService);
exports.TipoServiciosService = TipoServiciosService;
//# sourceMappingURL=tipo-servicios.service.js.map