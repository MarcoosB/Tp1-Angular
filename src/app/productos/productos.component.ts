import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos = [
    { id: 1, nombre: 'Producto A', precio: 100, descuento: true},
    { id: 2, nombre: 'Producto B', precio: 200, descuento: false },
    { id: 3, nombre: 'Producto C', precio: 300, descuento: true}
    ];

    
    nombre: string = '';
    precio: number = 0;
    descuento: boolean = false;

     //event listener

    AgregarProducto(event:any){

      const nuevoP={
      id: this.productos.length+1,
      nombre: event.target.value,
      precio: event.target.value,
      descuento: false
      }; 
      this.productos.push()
    }


}
