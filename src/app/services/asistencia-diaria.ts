import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsistenciaDiaria } from '../../interfaces/iAsistenciaDiaria';

@Injectable({
  providedIn: 'root',
})
export class AsistenciaDiariaService {
    private urlEndPoint: string = `http://localhost:5011/asistenciasdiarias`;

    constructor(private http: HttpClient){ }

    getAllAsistencias(): Observable<AsistenciaDiaria[]>
    {
      return this.http.get<AsistenciaDiaria[]>(this.urlEndPoint);
    }
}
