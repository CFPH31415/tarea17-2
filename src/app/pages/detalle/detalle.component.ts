import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  id!:number;
  public productoDetalle!:any;

  constructor(private route:ActivatedRoute, private dataServices:ProductosService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); 
    console.log(this.dataServices.detalleProducto(this.id));
    this.productoDetalle = this.dataServices.detalleProducto(this.id); 

  }

}
