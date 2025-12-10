import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, startWith, Subscription } from 'rxjs';
import { Alumno } from '../../interfaces/iAlumno';
import { AlumnosService } from '../services/alumnos';
import {MatTableDataSource} from '@angular/material/table';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatCardModule, MatCard } from '@angular/material/card';

@Component({
  selector: 'app-alumnos-endpoints',
  standalone : true,
  //imports: [RouterOutlet, AsyncPipe],
  imports: [RouterOutlet, AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './alumnos-endpoints.html',
  styleUrl: './alumnos-endpoints.css',
})
export class AlumnosEndpoints implements OnInit {
  constructor(private service : AlumnosService){ }
  //public AlumnosResults$! : Observable<Alumno[]>;
  //public AlumnosResults$! : any;

  dataSource = new MatTableDataSource<Alumno>();

  public displayColumn: string[] = ['idAlumno','matricula','nombre','apellidoPaterno','apelidoMaterno','idSemestreActual','editar'];

  public alumnosRefresh : null = null;

  ngOnInit(): void
  {
    this.getAllAlumnos();
    //Escuchamos los cambios en la lista de alumnos
    // this.alumnosRefresh =  this.service.alumnosActualizados.subscribe(AlumnosResults$ =>{
    //   this.AlumnosResults$ = this.AlumnosResults$
    // });
  }
  async getAllAlumnos(){
    this.service.getAllAlumnos().subscribe(response=>{
      this.dataSource.data = response
    });
  }
  //   applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.alumnnosResults$.filter = filterValue;
  // }
}
 