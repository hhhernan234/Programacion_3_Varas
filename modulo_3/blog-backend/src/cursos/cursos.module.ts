import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';
import { Curso } from './curso.entity'; // TypeORM Entity
import { Curso as CursoMongo, CursoSchema } from './schema/curso.schema'; // Mongoose Schema

@Module({
  imports: [
    TypeOrmModule.forFeature([Curso]),
    MongooseModule.forFeature([{ name: CursoMongo.name, schema: CursoSchema }]),
  ],
  controllers: [CursosController],
  providers: [CursosService],
  exports: [CursosService],
})
export class CursosModule {}