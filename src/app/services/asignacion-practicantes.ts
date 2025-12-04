import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsignacionPracticantes } from '../../interfaces/iAsignacionPracticantes';

@Injectable({
  providedIn: 'root',
})
export class AsignacionPracticantesService {
  private urleEndPoint: string = `http://localhost:5011/asignacionPracticantes`;

  constructor(private http: HttpClient){ }

  getAllAsignacionPracticantes(): Observable<AsignacionPracticantes[]>
  {
    return this.http.get<AsignacionPracticantes[]>(this.urleEndPoint);
  }
}
