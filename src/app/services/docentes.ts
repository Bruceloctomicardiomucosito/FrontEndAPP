import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../../interfaces/iDocente';

@Injectable({
  providedIn: 'root',
})
export class DocentesService {
  private urlEndPoint : string = `http://localhost:5011/docentes`;

  constructor(private http: HttpClient){ }

  getAllDocentes() : Observable<Docente[]>{
    return this.http.get<Docente[]>(this.urlEndPoint);
  }
}
