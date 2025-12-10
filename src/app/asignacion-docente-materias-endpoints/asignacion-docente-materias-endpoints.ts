import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignacionDocenteMateria } from '../../interfaces/iAsignacionDocentesMaterias';
import { AsignacionDocenteMateriaService } from '../services/asignacion-docente-materia';

@Component({
  selector: 'app-asignacion-docente-materias-endpoints',
  imports: [AsyncPipe],
  templateUrl: './asignacion-docente-materias-endpoints.html',
  styleUrl: './asignacion-docente-materias-endpoints.css',
})
export class AsignacionDocenteMateriasEndpoints implements OnInit {
  public AsignacionesDocenteMateriaResults$! : Observable<AsignacionDocenteMateria[]>; 

  constructor(private service: AsignacionDocenteMateriaService){ }
  
  ngOnInit(): void {
    this.service.getAllAsugnacionesDocenteMateria().subscribe(AsignacionesDocenteMateriaResults$ =>{
      console.log(AsignacionesDocenteMateriaResults$);
    });
  }
}
