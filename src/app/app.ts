import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Estos son decoradores
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
//Esta es la definicion de nuestra clase, la cual se llama App
export class App {
  protected readonly title = "Hola mundo xd";
  protected readonly variableRandom = "Cosas para escribir xd";
}
