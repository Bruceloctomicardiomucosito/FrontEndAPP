import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../../interfaces/iAlumno';
import { Modulo } from '../../interfaces/iModulo';

@Injectable({
  providedIn: 'root',
})
export class ModuloService {
  private urlEndPoint: string = `http://localhost:5011/modulos`;

  constructor(private http: HttpClient){ }

  getAllAlumnos() : Observable<Modulo[]>{
    return this.http.get<Modulo[]>(this.urlEndPoint);
  }
}
