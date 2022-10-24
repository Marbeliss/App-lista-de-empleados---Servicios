import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadoService } from '../servicio-empleado.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() CaracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio:ServicioEmpleadoService) { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string) {
    this.miServicio.muestraMensaje(value);
    this.CaracteristicasEmpleados.emit(value);
  }


}
