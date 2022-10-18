import { Component } from '@angular/core';
import { empleado } from './empleado.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleado';
   empleados:empleado[]=[

    new empleado("Juan","Diaz","Presidente",7500),
    new empleado("Ana","Martin","Direccion",5500),
    new empleado("Maria","Fdez","Jfa seccion",3500),
    new empleado("Laura","Lopez","Administrativo",2500),

  ];

  agregarEmpleado(){

    let miEmpleado=new  empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);

  }


  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;


}

