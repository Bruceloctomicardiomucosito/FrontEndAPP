import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignacionGruposAulas } from '../../interfaces/iAsignacionGruposAulas';

@Injectable({
  providedIn: 'root',
})
export class AsignacionGruposAulasService {
  private urlEndPoint: string = `http://localhost:5011/asignacionGrupoAula`;

  constructor(private http: HttpClient){}

  getAllAsignacionesGrupoAula() : Observable<AsignacionGruposAulas[]>{
    return this.http.get<AsignacionGruposAulas[]>(this.urlEndPoint);
  }
}
