import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Licenciatura } from '../../interfaces/iLicenciatura';
import { LicenciaturaService } from '../services/licenciatura';

@Component({
  selector: 'app-licenciaturas-endpoints',
  imports: [AsyncPipe],
  templateUrl: './licenciaturas-endpoints.html',
  styleUrl: './licenciaturas-endpoints.css',
})
export class LicenciaturasEndpoints implements OnInit{
  public LicenciaturasResults$! : Observable<Licenciatura[]>;

  constructor(private service: LicenciaturaService){ }

  ngOnInit(): void {
    this.service.getAllLicenciaturas().subscribe(
      response => {
        console.log(response);
    });
  }
}

