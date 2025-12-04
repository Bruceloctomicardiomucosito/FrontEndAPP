import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignacionGruposAulas } from '../../interfaces/iAsignacionGruposAulas';
import { AsignacionGruposAulasService } from '../services/asignacion-grupos-aulas';

@Component({
  selector: 'app-asignacion-grupos-aulas-endpoints',
  imports: [AsyncPipe],
  templateUrl: './asignacion-grupos-aulas-endpoints.html',
  styleUrl: './asignacion-grupos-aulas-endpoints.css',
})
export class AsignacionGruposAulasEndpoints implements OnInit {
  public asignacionGrupoAula$! : Observable<AsignacionGruposAulas[]>;

  constructor(private service: AsignacionGruposAulasService){ }

  ngOnInit(): void {
    this.service.getAllAsignacionesGrupoAula().subscribe(response =>
    {
      console.log(response);
    });
  }
}
