import { ApiAuth } from '@app/decorators/api.auth';
import { PageOptionsDto } from '@app/dto/page-metaoption.dto';
import { PageDto } from '@app/dto/page.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DesgloseService } from './desglose.service';
import { CreateDesgloseDto } from './dto/create-desglose.dto';
import { UpdateDesgloseDto } from './dto/update-desglose.dto';
import { Desglose } from './entities/desglose.entity';

@ApiTags('DESGLOSES')
@ApiBearerAuth()
@ApiAuth()
@Controller('desgloses/')
export class DesglosesController {
  constructor(private service: DesgloseService) {}

  @ApiOperation({
    summary: 'Consultar lista de Desgloses',
    description: 'Consulta de Desgloses',
    externalDocs: {
      url: 'xx/list?order=ASC&page=1&take=20',
    },
  })
  @ApiOkResponse({
    description: 'Lista de Desglose Paginada',
  })
  @Get('list')
  @HttpCode(HttpStatus.OK)
  async listar(@Query() pageOptionsDto: PageOptionsDto): Promise<PageDto<Desglose>> {
    return this.service.findAll(pageOptionsDto);
  }

  @ApiOperation({
    summary: 'Crear Desglose',
    description: 'Creación de Desglose',
  })
  @ApiOkResponse({
    type: String,
    description: 'Desglose creado correctamente',
  })
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async createDesglose(@Body() createDto: CreateDesgloseDto): Promise<string> {
    return await this.service.createDesglose(createDto);
  }

  @ApiOperation({
    summary: 'Modificar Desglose',
    description: 'Modificar el Desglose correspondiente',
  })
  @ApiOkResponse({
    type: String,
    description: 'Desglose modificado correctamente',
  })
  @HttpCode(HttpStatus.OK)
  @Patch(':id')
  async modifyDesgloseById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() updateDto: UpdateDesgloseDto
  ): Promise<string> {
    return await this.service.updateDesgloseById(id, updateDto);
  }

  @ApiOperation({
    summary: 'Eliminar Desglose',
    description: 'Eliminar Desglose basado en la identificación',
  })
  @ApiOkResponse({
    type: String,
    description: 'Desglose eliminada correctamente',
  })
  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  async destroyAreaById(@Param('id', new ParseIntPipe()) id: number): Promise<string> {
    return await this.service.deleteDesglose(id);
  }
}
