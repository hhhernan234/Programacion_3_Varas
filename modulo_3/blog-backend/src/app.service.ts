import { Injectable } from '@nestjs/common';
import { ProductoDto } from './product.dto';
import { find } from 'rxjs/internal/operators/find';

@Injectable()
export class AppService {
  private productos: ProductoDto[] = [
    { id: 1, 
      name: 'Laptop', 
      price: 10.99, 
      stock: 100 },

     { id: 2, 
      name: 'Mouse', 
      price: 10.99, 
      stock: 100 }, 
  ];

  getHealth(): any {
    return {
      "service":"blog service api",
      "version":"1.0.0",
      "date": new Date()
    };
  }

  createProducto(producto: ProductoDto): ProductoDto {
    const newProducto = {
      id: Math.random(), 
      ...producto
    }
    this.productos.push(newProducto);
    return {
      "id": newProducto.id,
      "name": newProducto.name,
      "price": newProducto.price,
      "stock": newProducto.stock
    };
  }  

  findAll(): ProductoDto[] {
    return this.productos;
  }

  findById(id: string): ProductoDto {
    return this.productos!
        .find(producto => producto.id === Number(id))!;
  }
}
