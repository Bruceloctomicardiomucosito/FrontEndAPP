import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { Alumno } from '../../interfaces/iAlumno';
import { AlumnosService } from '../services/alumnos';

@Component({
  selector: 'app-alumnos-endpoints',
  standalone : true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './alumnos-endpoints.html',
  styleUrl: './alumnos-endpoints.css',
})
export class AlumnosEndpoints implements OnInit {
  public AlumnosResults$!:Observable<Alumno[]>;
  constructor(private service : AlumnosService)
  {

  }
  ngOnInit(): void
  {
    this.service.getAllAlumnos().subscribe(
      response => {
        console.log(response);
      });
  }
}
