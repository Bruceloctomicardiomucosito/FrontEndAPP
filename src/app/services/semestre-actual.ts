import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SemestreActual } from '../../interfaces/iSemestreActual';

@Injectable({
  providedIn: 'root',
})
export class SemestreActualService {
  private urlEndPoint : string = `http://localhost:5011/semestreactual`;
  constructor(private http: HttpClient){}

  getAllSemestres(): Observable<SemestreActual[]>
  {
    return this.http.get<SemestreActual[]>(this.urlEndPoint);
  }
}
