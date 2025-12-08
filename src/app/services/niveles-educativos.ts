import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NivelEducativo } from '../../interfaces/iNivelEducativo';

@Injectable({
  providedIn: 'root',
})
export class NivelesEducativosService {
  private urlEndPoint : string = `http://localhost:5011/nivelesEducativos`;

  constructor(private http : HttpClient){ }
getAllNivelesEducativos() : Observable<NivelEducativo[]>
{
  return this.http.get<NivelEducativo[]>(this.urlEndPoint);
}
}
