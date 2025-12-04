import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaDiaria } from '../../interfaces/iAsistenciaDiaria';
import { AsistenciaDiariaService } from '../services/asistencia-diaria';

@Component({
  selector: 'app-asistencia-diaria-endpoints',
  imports: [AsyncPipe],
  templateUrl: './asistencia-diaria-endpoints.html',
  styleUrl: './asistencia-diaria-endpoints.css',
})
export class AsistenciaDiariaEndpoints implements OnInit{
  public asistenciaDiariaResults$!:Observable<AsistenciaDiaria[]>;

  constructor(private service: AsistenciaDiariaService){ }

  ngOnInit(): void {
    this.service.getAllAsistencias().subscribe(response => {
      console.log(response);
    });
  }
}
