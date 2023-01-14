import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos : any[] =[
    {
      id:1,
      descripcion:"Galletas chokis",
      precioCompra:"10.00",
      precioVenta:"15.00",
      ganancia:5,
      existencia:"100.00"
    },
    {
      id:2,
      descripcion:"Mermelada de fresa",
      precioCompra:"65.00",
      precioVenta:"80.00",
      ganancia:15,
      existencia:"100.00"
    },
    {
      id:3,
      descripcion:"Aceite",
      precioCompra:"18.00",
      precioVenta:"20.00",
      ganancia:2,
      existencia:"100.00"
    },
    {
      id:4,
      descripcion:"Palomitas de maíz",
      precioCompra:"12.00",
      precioVenta:"15.00",
      ganancia:3,
      existencia:"100.00"
    },
    {
      id:5,
      descripcion:"Doritos",
      precioCompra:"5.00",
      precioVenta:"8.00",
      ganancia:3,
      existencia:"100.00"
    },
  ]
  constructor() { }

  detalleProducto(id:number){ 
    const items = this.productos.filter(item => item.id === id)
    return items;
  }
}