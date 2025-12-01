import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EscuelasEndpoints } from './escuelas-endpoints/escuelas-endpoints';
import { AlumnosEndpoints } from './alumnos-endpoints/alumnos-endpoints';

//Estos son decoradores
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EscuelasEndpoints,AlumnosEndpoints],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//Esta es la definicion de nuestra clase, la cual se llama App
export class App {
  protected readonly title = "juan ES JOTO";
  protected readonly variableRandom = "Cosas para escribir xd";
  valor = 0;
  contador() {
    return this.valor = this.valor + 1;
  }
}
