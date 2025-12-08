import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../../interfaces/iGrupo';

@Injectable({
  providedIn: 'root',
})
export class GruposService {
  private urlEndPoint : string = `http://localhost:5011/grupos`;

  constructor(private http: HttpClient){ }

  getAllGrupos():Observable<Grupo[]>
  {
    return this.http.get<Grupo[]>(this.urlEndPoint);
  }
}
