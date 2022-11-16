import { PageMetaDto } from '@app/dto/page-meta.dto';
import { PageOptionsDto } from '@app/dto/page-metaoption.dto';
import { PageDto } from '@app/dto/page.dto';
import { CustomRepository } from '@app/typeorm/typeorm-ex.decorator';
import { HttpException, HttpStatus, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { integer } from 'aws-sdk/clients/cloudfront';
import { Repository } from 'typeorm';
import { CreateTipoUsoDto } from '../dto/create-tipouso.dto';
import { UpdateTipoUsoDto } from '../dto/update-tipouso.dto';
import { TipoUso } from '../entities/tipouso.entity';

@CustomRepository(TipoUso)
export class TipoUsoRepository extends Repository<TipoUso> {
    async createTipoUso(createTipoUsoDto: CreateTipoUsoDto) {
        const { descripcion } = createTipoUsoDto;

        const findNameResult: Pick<TipoUso, 'id'> | undefined = await this.findOne({
            where: { descripcion },
            select: ['id'],
        });
        if (findNameResult) {
            throw new NotAcceptableException(
                `El tipo de uso ${descripcion} ya existe y no se puede crear repetidamente`
            );
        }
        const tipouso: TipoUso = this.create(createTipoUsoDto);
        await this.save(tipouso);

        return tipouso;
    }
    async updateTipoUso(id: number, updateTipoUsoDto: UpdateTipoUsoDto): Promise<TipoUso> {
        const tipouso = await this.findOneBy({ id });
        if (!tipouso) throw new HttpException('No se pudo actualizar la información', HttpStatus.BAD_REQUEST);
        await this.update({ id: tipouso.id }, { ...updateTipoUsoDto });

        return tipouso;
    }

    async findAllTipoUsoById(id: number) {
        const tipouso = await this.findOne({ where: { id: id } });
        return tipouso;
    }
    async findAllTipoUso() {
        const tipouso = await this.find();
        return tipouso;
    }

    async findAllTipoUsoPaginate(pageOptionsDto: PageOptionsDto): Promise<PageDto<TipoUso>> {
        const queryBuilder = this.createQueryBuilder('informe_tipouso');
        queryBuilder
            .orderBy('informe_tipouso.createdAt', pageOptionsDto.order)
            .skip(pageOptionsDto.skip)
            .take(pageOptionsDto.take);

        const itemCount = await queryBuilder.getCount();
        const { entities } = await queryBuilder.getRawAndEntities();

        const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

        return new PageDto(entities, pageMetaDto);
    }

    async deleteTipoUso(id: number): Promise<string> {
        const existTipoUso = await this.findOne({ where: { id: id } });
        if (!existTipoUso) {
            throw new HttpException(`Tipo de Uso con id ${id} no existe`, HttpStatus.OK);
        }
        const deleteResponse = await this.softDelete(id);
        if (deleteResponse.affected) {
            return 'Eliminado Correctamente';
        } else {
            throw new NotFoundException(id);
        }
    }
}
