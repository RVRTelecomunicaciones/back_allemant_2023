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
exports.InvolucradoNaturalesService = void 0;
const page_meta_dto_1 = require("../../dto/page-meta.dto");
const page_dto_1 = require("../../dto/page.dto");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const involucrado_natural_entity_1 = require("./entities/involucrado-natural.entity");
let InvolucradoNaturalesService = class InvolucradoNaturalesService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll(pageOptionsDto) {
        const queryBuilder = this.repository.createQueryBuilder('co_involucrado_natural');
        queryBuilder
            .leftJoinAndSelect('co_involucrado_natural.tipoDocumento', 'involucrados')
            .orderBy('co_involucrado_natural.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);
        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();
        const pageMetaDto = new page_meta_dto_1.PageMetaDto({ itemCount, pageOptionsDto });
        return new page_dto_1.PageDto(entities, pageMetaDto);
    }
    async createInvolucradoNatural(createDto) {
        const { nro_documento } = createDto;
        const findNameResult = await this.repository.findOne({
            where: { nro_documento },
            select: ['id'],
        });
        if (findNameResult) {
            throw new common_1.HttpException(`${nro_documento} El Involucrado actual ya existe y no se puede crear repetidamente`, common_1.HttpStatus.OK);
        }
        const involucradoNatural = this.repository.create(createDto);
        await this.repository.save(involucradoNatural);
        return 'Involucrado Natural creado con exito';
    }
    async updateInvolucradoNaturalById(id, updateDto) {
        const existInvolucradoNatural = await this.repository.findOne({ where: { id: id } });
        if (!existInvolucradoNatural) {
            throw new common_1.NotFoundException(`Involucrado con id ${id} no existe`);
        }
        const { paterno, materno, nombre, tipoDocumento, nro_documento, telefono, celular1, celular2, direccion, correo } = updateDto;
        const Myobjeto = {
            paterno: paterno,
            materno: materno,
            nombre: nombre,
            tipoDocumento: tipoDocumento,
            nro_documento: nro_documento,
            telefono: telefono,
            celular1: celular1,
            celular2: celular2,
            direccion: direccion,
            correo: correo,
        };
        console.log(Myobjeto);
        const updateResponse = await this.repository.update(existInvolucradoNatural.id, Myobjeto);
        console.log(updateResponse);
        if (updateResponse.affected) {
            return 'Modificación exitosa';
        }
        else {
            return 'Errors de modificación';
        }
    }
    async deleteInvolucradoNatural(id) {
        const existInvolucradoNatural = await this.repository.findOne({ where: { id: id } });
        if (!existInvolucradoNatural) {
            throw new common_1.HttpException(`Involucrado con id ${id} no existe`, common_1.HttpStatus.OK);
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
InvolucradoNaturalesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(involucrado_natural_entity_1.InvolucradoNatural)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvolucradoNaturalesService);
exports.InvolucradoNaturalesService = InvolucradoNaturalesService;
//# sourceMappingURL=involucrado-naturales.service.js.map