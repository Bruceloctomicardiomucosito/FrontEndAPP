import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaDiaria } from '../../interfaces/iAsistenciaDiaria';
import { AsistenciaDiariaService } from '../services/asistencia-diaria';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-asistencia-diaria-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './asistencia-diaria-endpoints.html',
  styleUrl: './asistencia-diaria-endpoints.css',
})
export class AsistenciaDiariaEndpoints implements OnInit{
  public asistenciaDiariaResults$!:Observable<AsistenciaDiaria[]>;
  public dataSource = new MatTableDataSource<AsistenciaDiaria>()
  public displayColumn : string[] = ['idAsistencia','idDia','idModulo','idAula','idDocente','asistencia','detalles','editar'];
  constructor(private service: AsistenciaDiariaService){ }

  ngOnInit(): void {
    this.service.getAllAsistencias().subscribe(response => {
      this.dataSource.data = response;
    });
  }
}
