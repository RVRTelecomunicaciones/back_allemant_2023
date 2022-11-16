import { PageOptionsDto } from '@app/dto/page-metaoption.dto';
import { PageDto } from '@app/dto/page.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTipoUsoDto } from './dto/create-tipouso.dto';
import { UpdateTipoUsoDto } from './dto/update-tipouso.dto';
import { TipoUso } from './entities/tipouso.entity';
import { TipoUsoRepository } from './repository/tipo-uso.repository';

@Injectable()
export class TipoUsoService {
    constructor(private repository: TipoUsoRepository) {}
    async findAll() {
        try {
            return this.repository.findAllTipoUso();
        } catch (error) {}
    }

    async findAllPaginate(pageOptionsDto: PageOptionsDto): Promise<PageDto<TipoUso>> {
        try {
            return this.repository.findAllTipoUsoPaginate(pageOptionsDto);
        } catch (error) {}
    }

    async create(createTipoUsoDto: CreateTipoUsoDto) {
        try {
            return this.repository.createTipoUso(createTipoUsoDto);
        } catch (error) {}
    }
    async update(id: number, updateTipoUsoDto: UpdateTipoUsoDto) {
        try {
            return this.repository.updateTipoUso(id, updateTipoUsoDto);
        } catch (error) {}
    }

    async findAllTipoUsoById(id: number) {
        const tipouso = await this.repository.findAllTipoUsoById(id);
        return tipouso;
    }

    async delete(id: number) {
        try {
            return this.repository.deleteTipoUso(id);
        } catch (error) {}
    }
}
