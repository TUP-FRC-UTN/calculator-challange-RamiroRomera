import { Component } from '@angular/core';
import { BotonComponent } from "../boton/boton.component";
import { ValorComponent } from "../valor/valor.component";

@Component({
  selector: 'app-cuerpo-calculadora',
  standalone: true,
  imports: [BotonComponent, ValorComponent],
  templateUrl: './cuerpo-calculadora.component.html',
  styleUrl: './cuerpo-calculadora.component.css'
})
export class CuerpoCalculadoraComponent {
  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  actualizarValor1(valor: number): void {
    this.valor1 = valor;
  }

  actualizarValor2(valor: number): void {
    this.valor2 = valor;
  }

  realizarOperacion(operacion: string): void {
    switch (operacion) {
      case '+':
        this.resultado = this.valor1 + this.valor2;
        break;
      case '-':
        this.resultado = this.valor1 - this.valor2;
        break;
      case 'X':
        this.resultado = this.valor1 * this.valor2;
        break;
      case '÷':
        this.resultado = this.valor1 / this.valor2;
        break;
      case '^':
        this.resultado = Math.pow(this.valor1, this.valor2);
        break;
      case 'CE':
        this.valor1 = 0;
        this.valor2 = 0;
        this.resultado = 0;
        break;
      default:
        break;
    }
  }
}
