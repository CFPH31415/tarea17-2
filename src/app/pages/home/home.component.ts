import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listaProductos !: any[];
  constructor(private dataServices:ProductosService,private router:Router) { }

  ngOnInit(): void {
    this.listaProductos = this.dataServices.productos; 
  }

  editar(id:number){
    this.router.navigate(['/detalle',id]);
  }
}
