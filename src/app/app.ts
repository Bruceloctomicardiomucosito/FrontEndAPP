import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EscuelasEndpoints } from './escuelas-endpoints/escuelas-endpoints';
import { AlumnosEndpoints } from './alumnos-endpoints/alumnos-endpoints';
//import { NgIf } from "../../node_modules/@angular/common/types/_common_module-chunk";

//Estos son decoradores
@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, EscuelasEndpoints, AlumnosEndpoints, RouterLink],
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
  ///Variables de navegacion de los menus
  statusAsignacionesMenu = "close";
  statusInfraestructuraMenu = "close";
  statusPersonalMenu = "close";
  statusOfertaEducativaMenu = "close";


  toggleAsignacionesMenu(){
    if (this.statusAsignacionesMenu == "close")
    {
      this.statusAsignacionesMenu = "open";
    }
    else
      this.statusAsignacionesMenu = "close"
  }

  toggleInfraestructuraMenu()
  {
    if (this.statusInfraestructuraMenu == "close")
    {
      this.statusInfraestructuraMenu = "open";
    }
    else
      this.statusInfraestructuraMenu = "close"
  }
  togglePersonalMenu(){
    if (this.statusPersonalMenu == "close")
    {
      this.statusPersonalMenu = "open";
    }
    else
      this.statusPersonalMenu = "close"
  }
    toggleOfertaEducativaMenu(){
    if (this.statusOfertaEducativaMenu == "close")
    {
      this.statusOfertaEducativaMenu = "open";
    }
    else
      this.statusOfertaEducativaMenu = "close"
  }
}
