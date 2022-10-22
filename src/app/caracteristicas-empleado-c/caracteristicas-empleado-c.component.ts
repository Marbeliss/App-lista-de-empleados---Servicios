import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrls: ['./caracteristicas-empleado-c.component.css']
})
export class CaracteristicasEmpleadoCComponent implements OnInit {

  @Output() CaracteristicasEmpleados = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  agregarCaracteristicas(value: string) {
    this.CaracteristicasEmpleados.emit(value);
  }


}
