import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-valor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './valor.component.html',
  styleUrl: './valor.component.css'
})
export class ValorComponent {

  @Input() nombre: string = '';

  @Output() valorCambio: EventEmitter<number> = new EventEmitter<number>();

  valor: number = 0;

  valorCambiado(nuevoValor: number): void {
    this.valorCambio.emit(nuevoValor);
  } 
}
