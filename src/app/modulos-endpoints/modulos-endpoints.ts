import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulo } from '../../interfaces/iModulo';
import { AsyncPipe } from '@angular/common';
import { ModuloService } from '../services/modulos';

@Component({
  selector: 'app-modulos-endpoints',
  imports: [AsyncPipe],
  templateUrl: './modulos-endpoints.html',
  styleUrl: './modulos-endpoints.css',
})
export class ModulosEndpoints implements OnInit{
  public ModulosResults$! : Observable<Modulo[]>

  constructor(private service : ModuloService){ }
  ngOnInit(): void {
    this.service.getAllAlumnos().subscribe(response =>{
      console.log(response);
    });    
  }
}
