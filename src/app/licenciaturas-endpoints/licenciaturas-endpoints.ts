import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Licenciatura } from '../../interfaces/iLicenciatura';
import { LicenciaturaService } from '../services/licenciatura';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-licenciaturas-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './licenciaturas-endpoints.html',
  styleUrl: './licenciaturas-endpoints.css',
})
export class LicenciaturasEndpoints implements OnInit{
  public LicenciaturasResults$! : Observable<Licenciatura[]>;

  public dataSource = new MatTableDataSource<Licenciatura>();

  public displayColumn:string[] = ['idLicenciatura',
    'nombre','descripcion','statusLicenciatura','editar'];

  constructor(private service: LicenciaturaService){ }

  ngOnInit(): void {

    this.getAllLicenciaturas();

  }

  getAllLicenciaturas(){
    this.service.getAllLicenciaturas().subscribe(
      response => {
        this.dataSource.data = response;
    });
  }
}

