import { PageMetaDto } from '@app/dto/page-meta.dto';
import { PageOptionsDto } from '@app/dto/page-metaoption.dto';
import { PageDto } from '@app/dto/page.dto';
import { HttpException, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTipoServicioDto } from '../tipo-servicios/dto/update-tipo-servicio.dto';
import { CreateTipoCotizacionDto } from './dto/create-tipo-cotizacion.dto';
import { TipoCotizacion } from './entities/tipo-cotizacion.entity';

@Injectable()
export class TipoCotizacionesService {
    constructor(
        @InjectRepository(TipoCotizacion)
        private repository: Repository<TipoCotizacion>
    ) {}

    async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<TipoCotizacion>> {
        const queryBuilder = this.repository.createQueryBuilder('co_cotizacion_tipo');
        queryBuilder
            .orderBy('co_cotizacion_tipo.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);

        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();

        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

        return new PageDto(entities, pageMetaDto);
    }

    async createTipoCotizacion(createDto: CreateTipoCotizacionDto): Promise<string> {
        const { nombre } = createDto;
        const findNameResult: Pick<TipoCotizacion, 'id'> | undefined = await this.repository.findOne({
            where: { nombre },
            select: ['id'],
        });

        if (findNameResult) {
            throw new NotAcceptableException(
                `${nombre} el Tipo de Cotización actual ya existe y no se puede crear repetidamente`
            );
        }

        const tipoCotizacion: TipoCotizacion = this.repository.create(createDto);
        await this.repository.save(tipoCotizacion);
        return 'Tipo de Cotización creado con éxito';
    }

    async updateTipoCotizacionById(id: number, updateDto: UpdateTipoServicioDto): Promise<string> {
        const existTipoCotizacion = await this.repository.findOne({ where: { id: id }, withDeleted: true });
        console.log('Update Tipo de Cotización');
        console.log(existTipoCotizacion);
        if (!existTipoCotizacion) {
            throw new NotFoundException(`Tipo de Cotización con id ${id} no existe`);
        }
        const updateResponse = await this.repository.update(id, updateDto);

        if (updateResponse.affected) {
            return 'Modificación exitosa';
        } else {
            return 'Error de modificación';
        }
    }

    async deleteTipoCotizacion(id: number): Promise<string> {
        const existTipoCotizacion = await this.repository.findOne({ where: { id: id } });
        if (!existTipoCotizacion) {
            throw new HttpException(`Tipo de Cotización con id ${id} no existe`, HttpStatus.OK);
        }
        const deleteResponse = await this.repository.softDelete(id);

        if (deleteResponse.affected) {
            return 'Eliminado con éxito';
        } else {
            return 'No se pudo eliminar';
        }
    }
}
