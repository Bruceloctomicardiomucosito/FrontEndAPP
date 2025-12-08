import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../../interfaces/iEscuela';

@Injectable({
  providedIn: 'root',
})
export class EscuelasService {
  private urlEndPont : string = `http://localhost:5011/escuelas`;
  constructor(private http: HttpClient){ }

  getAllEscuelas():Observable<Escuela[]>
  {
    return this.http.get<Escuela[]>(this.urlEndPont);
  }
}
