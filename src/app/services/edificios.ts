import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Edificio, EdificiosResults } from '../../interfaces/iEdificio';

@Injectable({
  providedIn: 'root',
})
export class EdificiosService {
  private urlEndPoint: string = `http://localhost:5011/edificios`;

  constructor(private http: HttpClient){ }

  getAllEdificios() : Observable<Edificio[]>
  {
    return this.http.get<Edificio[]>(this.urlEndPoint);
  }
}
