import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../interfaces/iAlumno';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private urlEndPoint: string = `http://localhost:5011/alumnos`;

  constructor(private http: HttpClient){ }

  getAllAlumnos() : Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.urlEndPoint);
  }
}
