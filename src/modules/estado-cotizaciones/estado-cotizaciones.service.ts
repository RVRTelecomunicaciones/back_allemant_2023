import { PageMetaDto } from '@app/dto/page-meta.dto';
import { PageOptionsDto } from '@app/dto/page-metaoption.dto';
import { PageDto } from '@app/dto/page.dto';
import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstadoCotizacionDto } from './dto/create-estado-cotizacion.dto';
import { UpdateEstadoCotizacionDto } from './dto/update-estado-cotizacion.dto';
import { EstadoCotizacion } from './entities/estado-cotizacion.entity';

@Injectable()
export class EstadoCotizacionesService {
  constructor(
    @InjectRepository(EstadoCotizacion)
    private repository: Repository<EstadoCotizacion>
  ) {}

  async findAll(pageOptionsDto: PageOptionsDto): Promise<PageDto<EstadoCotizacion>> {
    const queryBuilder = this.repository.createQueryBuilder('co_cotizacion_estado');
    queryBuilder
      .orderBy('co_cotizacion_estado.createdAt', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  async createEstadoCotizacion(createDto: CreateEstadoCotizacionDto): Promise<string> {
    const { nombre } = createDto;
    const findNameResult: Pick<EstadoCotizacion, 'id'> | undefined = await this.repository.findOne({
      where: { nombre },
      select: ['id'],
    });
    if (findNameResult) {
      throw new HttpException(
        `${nombre} el Estado de Cotización ya existe y no se puede crear repetidamente`,
        HttpStatus.OK
      );
    }

    const estadoCotizacion: EstadoCotizacion = this.repository.create(createDto);
    await this.repository.save(estadoCotizacion);
    return 'Estado de cotización creado con éxito';
  }

  async updateEstadoCotizacionById(id: number, updateDto: UpdateEstadoCotizacionDto): Promise<string> {
    const existEstadoCotizacion = await this.repository.findOne({ where: { id: id } });

    if (!existEstadoCotizacion) {
      throw new NotFoundException(`Estado de Cotización id ${id} no existe`);
    }
    const updateResponse = await this.repository.update(id, updateDto);

    if (updateResponse.affected) {
      return 'Modificación exitosa';
    } else {
      return 'Error de modificación';
    }
  }

  async deleteEstadoCotizacion(id: number): Promise<string> {
    const existEstadoCotizacion = await this.repository.findOne({ where: { id: id } });
    console.log(existEstadoCotizacion);
    if (!existEstadoCotizacion) {
      console.log('existEstadoCotizacion');
      console.log(existEstadoCotizacion);
      throw new HttpException(`Estado de Cotización con id ${id} no existe`, HttpStatus.OK);
    }
    const deleteResponse = await this.repository.softDelete(id);
    if (deleteResponse.affected) {
      return 'Eliminado con éxito';
    } else {
      return 'No se pudo eliminar';
    }
  }
}
