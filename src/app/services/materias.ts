import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../../interfaces/iMateria';

@Injectable({
  providedIn: 'root',
})
export class MateriasService {
  private urlEndPoint : string = `http://localhost:5011/materias`;

  constructor(private http: HttpClient) { }

  getAllMaterias() : Observable<Materia[]>
  {
    return this.http.get<Materia[]>(this.urlEndPoint);
  }
}
