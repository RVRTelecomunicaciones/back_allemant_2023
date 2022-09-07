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
exports.ServiciosService = void 0;
const page_meta_dto_1 = require("../../dto/page-meta.dto");
const page_dto_1 = require("../../dto/page.dto");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const requisito_entity_1 = require("../requisitos/entities/requisito.entity");
const servicio_entity_1 = require("./entities/servicio.entity");
let ServiciosService = class ServiciosService {
    constructor(repository, repositoryRequisito) {
        this.repository = repository;
        this.repositoryRequisito = repositoryRequisito;
    }
    async findAll(pageOptionsDto) {
        const queryBuilder = this.repository.createQueryBuilder('co_servicio');
        queryBuilder
            .leftJoinAndSelect('co_servicio.tipoServicio', 'servicios')
            .orderBy('co_servicio.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
        return new page_dto_1.PageDto(entities, pageMetaDto);
    }
    async createServicio(createDto) {
        const { nombre } = createDto;
        const findNameResult = await this.repository.findOne({
            where: { nombre },
            select: ['id'],
        });
        if (findNameResult) {
            throw new common_1.HttpException(`${nombre} El Servicio actual ya existe y no se puede crear repetidamente`, common_1.HttpStatus.OK);
        }
        const servicio = this.repository.create(createDto);
        await this.repository.save(servicio);
        return 'Servicio creado con exito';
    }
    async createServicioRequisito(servicioRequisito) {
        const servicio = await this.repository.create(servicioRequisito);
        console.log(servicio);
    }
    async updateServicioById(id, updateDto) {
        const existServicio = await this.repository.findOne({ where: { id: id } });
        if (!existServicio) {
            throw new common_1.NotFoundException(`Servicio con id ${id} no existe`);
        }
        const { nombre, tipoServicio } = updateDto;
        const Myobjeto = {
            nombre: nombre,
            tipoServicio: tipoServicio,
        };
        console.log(Myobjeto);
        const updateResponse = await this.repository.update(existServicio.id, Myobjeto);
        console.log(updateResponse);
        if (updateResponse.affected) {
            return 'Modificación exitosa';
        }
        else {
            return 'Errors de modificación';
        }
    }
    async deleteServicio(id) {
        const existServicio = await this.repository.findOne({ where: { id: id } });
        if (!existServicio) {
            throw new common_1.HttpException(`Servicio con id ${id} no existe`, common_1.HttpStatus.OK);
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
ServiciosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(servicio_entity_1.Servicio)),
    __param(1, (0, typeorm_1.InjectRepository)(requisito_entity_1.Requisito)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ServiciosService);
exports.ServiciosService = ServiciosService;
//# sourceMappingURL=servicios.service.js.map