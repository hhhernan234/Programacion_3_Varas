import {
  Controller, Get, Post, Put, Delete,
  Param, Body, Query, NotFoundException, InternalServerErrorException,
} from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CreateCursoDto } from './dto/create-curso.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  async create(@Body() dto: CreateCursoDto) {
    const curso = await this.cursosService.create(dto);
    if (!curso) throw new InternalServerErrorException('Failed to create course');
    return new SuccessResponseDto('Curso created successfully', curso);
  }

  @Get()
  async findAll(@Query() query: { page?: number; limit?: number }): Promise<SuccessResponseDto<any>> {
    const page  = query.page  ?? 1;
    const limit = Math.min(query.limit ?? 10, 100);   // ← tope de 100
    const result = await this.cursosService.findAll({ page, limit });
    if (!result) throw new InternalServerErrorException('Could not retrieve courses');
    return new SuccessResponseDto('Cursos retrieved successfully', result);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const curso = await this.cursosService.findOne(id);
    if (!curso) throw new NotFoundException('Course not found');
    return new SuccessResponseDto('Curso retrieved successfully', curso);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: CreateCursoDto) {
    const curso = await this.cursosService.update(id, dto);
    if (!curso) throw new NotFoundException('Course not found');
    return new SuccessResponseDto('Curso updated successfully', curso);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const curso = await this.cursosService.remove(id);
    if (!curso) throw new NotFoundException('Course not found');
    return new SuccessResponseDto('Curso deleted successfully', curso);
  }
}