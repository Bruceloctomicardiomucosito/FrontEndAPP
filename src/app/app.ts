import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EscuelasEndpoints } from './escuelas-endpoints/escuelas-endpoints';

//Estos son decoradores
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EscuelasEndpoints],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//Esta es la definicion de nuestra clase, la cual se llama App
export class App {
  protected readonly title = "juan es jot mundo xd";
  protected readonly variableRandom = "Cosas para escribir xd";
}
