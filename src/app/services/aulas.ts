import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from '../../interfaces/iAula';

@Injectable({
  providedIn: 'root',
})
export class AulasService {
  private urlEndPoint : string = `http://localhost:5011/aulas`;
  constructor(private http:HttpClient){ }

  getAllAulas(): Observable<Aula[]>{
    return this.http.get<Aula[]>(this.urlEndPoint);
  }
}
