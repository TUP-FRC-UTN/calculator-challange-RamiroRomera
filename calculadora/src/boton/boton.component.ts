import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  standalone: true,
  imports: [],
  templateUrl: './boton.component.html',
  styleUrl: './boton.component.css'
})
export class BotonComponent {
  @Input() signo: string = '';
  
  @Output() operacionSeleccionada: EventEmitter<string> = new EventEmitter<string>();

  onClick(): void {
    this.operacionSeleccionada.emit(this.signo);
  }
}
