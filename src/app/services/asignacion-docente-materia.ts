import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignacionDocenteMateria } from '../../interfaces/iAsignacionDocentesMaterias';

@Injectable({
  providedIn: 'root',
})
export class AsignacionDocenteMateriaService {
  private urlEndPoint: string = `http://localhost:5011/asignacionDocenteMateria`;

  constructor(private http: HttpClient){ }

  getAllAsugnacionesDocenteMateria(): Observable<AsignacionDocenteMateria[]>
  {
    return this.http.get<AsignacionDocenteMateria[]>(this.urlEndPoint);
  }
}
