import { TransformInterceptor } from '@app/common/interceptors/transform.interceptor';
import { RESPONSE_DELETED, RESPONSE_INSERTED, RESPONSE_UPDATED } from '@app/constants/response.constants';
import { ApiAuth } from '@app/decorators/api.auth';
import { ResponseMessage } from '@app/decorators/response.decorator';
import { PageOptionsDto } from '@app/dto/page-metaoption.dto';
import { PageDto } from '@app/dto/page.dto';
import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTipoUsoDto } from './dto/create-tipouso.dto';
import { UpdateTipoUsoDto } from './dto/update-tipouso.dto';
import { TipoUso } from './entities/tipouso.entity';
import { TipoUsoService } from './tipo-uso.service';

@Controller('tipo-uso/')
@ApiTags('TIPO DE USO - INFORME DIGITALIZADO')
@ApiBearerAuth()
@ApiAuth()
export class TipoUsoController {
    constructor(private service: TipoUsoService) {}
    @ApiOperation({
        summary: 'Consultar lista de Tipo de Uso',
        description: 'Consulta de Tipo de Uso',
        externalDocs: {
            url: 'xx/list?order=ASC&page=1&take=20',
        },
    })
    @ApiOkResponse({
        description: 'Lista de Tipo de Uso paginada',
    })
    @Get('listall')
    @HttpCode(HttpStatus.OK)
    async listAll(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<TipoUso>> {
        return this.service.findAllPaginate(pageOptionsDto);
    }

    @ApiOperation({
        summary: 'Crear Tipo de Uso',
        description: 'Creación de Tipo de Uso',
    })
    @ApiOkResponse({
        type: String,
        description: 'Tipo de Uso creado correctamente',
    })
    @UseInterceptors(TransformInterceptor)
    @ResponseMessage(RESPONSE_INSERTED)
    @Post()
    async create(@Body() createDto: CreateTipoUsoDto): Promise<TipoUso> {
        return await this.service.create(createDto);
    }

    @ApiOperation({
        summary: 'Modificar Tipo de Uso',
        description: 'Modificar el Tipo de Uso correspondiente',
    })
    @ApiOkResponse({
        type: String,
        description: 'Tipo de Servicio modificado correctamente',
    })
    @HttpCode(HttpStatus.OK)
    @UseInterceptors(TransformInterceptor)
    @ResponseMessage(RESPONSE_UPDATED)
    @Patch(':id')
    async update(@Param('id', new ParseIntPipe()) id: number, @Body() updateDto: UpdateTipoUsoDto) {
        return await this.service.update(id, updateDto);
    }

    //DELETE TIPO DE USO

    @ApiOperation({
        summary: 'Eliminar Tipo de Uso',
        description: 'Eliminar Tipo dce Uso',
    })
    @ApiOkResponse({
        type: String,
        description: 'Tipo de Servicio eliminado correctamente',
    })
    @UseInterceptors(TransformInterceptor)
    @ResponseMessage(RESPONSE_DELETED)
    @HttpCode(HttpStatus.OK)
    @Delete(':id')
    async delete(@Param('id', new ParseIntPipe()) id: number): Promise<string> {
        return await this.service.delete(id);
    }
}
