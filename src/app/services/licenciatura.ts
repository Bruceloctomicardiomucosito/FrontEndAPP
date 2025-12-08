import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Licenciatura } from '../../interfaces/iLicenciatura';

@Injectable({
  providedIn: 'root',
})
export class LicenciaturaService {
  private urlEndPoint: string = `http://localhost:5011/licenciaturas`;

  constructor(private http: HttpClient){ }

  getAllLicenciaturas() : Observable<Licenciatura[]>
  {
    return this.http.get<Licenciatura[]>(this.urlEndPoint);
  }
  
}
