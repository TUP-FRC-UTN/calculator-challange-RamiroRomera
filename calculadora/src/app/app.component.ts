import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonComponent } from "../boton/boton.component";
import { ValorComponent } from "../valor/valor.component";
import { ResultadoComponent } from "../resultado/resultado.component";
import { CuerpoCalculadoraComponent } from "../cuerpo-calculadora/cuerpo-calculadora.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BotonComponent, ValorComponent, ResultadoComponent, CuerpoCalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
}
