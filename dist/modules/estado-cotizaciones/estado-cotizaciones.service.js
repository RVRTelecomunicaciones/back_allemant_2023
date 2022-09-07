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
exports.EstadoCotizacionesService = void 0;
const page_meta_dto_1 = require("../../dto/page-meta.dto");
const page_dto_1 = require("../../dto/page.dto");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const estado_cotizacion_entity_1 = require("./entities/estado-cotizacion.entity");
let EstadoCotizacionesService = class EstadoCotizacionesService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(pageOptionsDto) {
        const queryBuilder = this.repository.createQueryBuilder('co_cotizacion_estado');
        queryBuilder
            .orderBy('co_cotizacion_estado.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
        return new page_dto_1.PageDto(entities, pageMetaDto);
    }
    async createEstadoCotizacion(createDto) {
        const { nombre } = createDto;
        const findNameResult = await this.repository.findOne({
            where: { nombre },
            select: ['id'],
        });
        if (findNameResult) {
            throw new common_1.HttpException(`${nombre} el Estado de Cotización ya existe y no se puede crear repetidamente`, common_1.HttpStatus.OK);
        }
        const estadoCotizacion = this.repository.create(createDto);
        await this.repository.save(estadoCotizacion);
        return 'Estado de cotización creado con éxito';
    }
    async updateEstadoCotizacionById(id, updateDto) {
        const existEstadoCotizacion = await this.repository.findOne({ where: { id: id } });
        if (!existEstadoCotizacion) {
            throw new common_1.NotFoundException(`Estado de Cotización id ${id} no existe`);
        }
        const updateResponse = await this.repository.update(id, updateDto);
        if (updateResponse.affected) {
            return 'Modificación exitosa';
        }
        else {
            return 'Error de modificación';
        }
    }
    async deleteEstadoCotizacion(id) {
        const existEstadoCotizacion = await this.repository.findOne({ where: { id: id } });
        console.log(existEstadoCotizacion);
        if (!existEstadoCotizacion) {
            console.log('existEstadoCotizacion');
            console.log(existEstadoCotizacion);
            throw new common_1.HttpException(`Estado de Cotización con id ${id} no existe`, common_1.HttpStatus.OK);
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
EstadoCotizacionesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(estado_cotizacion_entity_1.EstadoCotizacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EstadoCotizacionesService);
exports.EstadoCotizacionesService = EstadoCotizacionesService;
//# sourceMappingURL=estado-cotizaciones.service.js.map