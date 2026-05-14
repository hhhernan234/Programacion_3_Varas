import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductoDto } from './product.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/health")
  getHealth(): any {
    return this.appService.getHealth();
  }

   @Post("/productos")
  createProducto(@Body() producto: ProductoDto): ProductoDto {
    return this.appService.createProducto(producto);
  }

  @Get("/productos")
  findAll(): ProductoDto[] {
    return this.appService.findAll();
  }

  @Get("/productos")
  findBYId(@Param('id') id: string): ProductoDto {
    return this.appService.findById(id);
  }
}
