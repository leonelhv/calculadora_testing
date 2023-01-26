import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora_testing';

  dato1: string = '';
  dato2: string = '';
  resultado: number | string = 0;
  operacion = '';
  onOperacion() {
    if (!this.operacion) return;

    const dato1 = Number(this.dato1);
    const dato2 = Number(this.dato2);

    switch (this.operacion) {
      case 'suma':
        this.resultado = dato1 + dato2;
        break;
      case 'resta':
        this.resultado = dato1 - dato2;
        break;
      case 'multiplicacion':
        this.resultado = dato1 * dato2;
        break;
      case 'division':
        this.resultado = dato1 / dato2;
        break;
      default:
        this.resultado = 'Seleccione una de las operaciones';
        break;
    }
  }
}
