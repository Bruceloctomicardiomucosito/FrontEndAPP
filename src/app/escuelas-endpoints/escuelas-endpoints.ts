import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../../interfaces/iEscuela';
import { EscuelasService } from '../services/escuelas';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-escuelas-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './escuelas-endpoints.html',
  styleUrl: './escuelas-endpoints.css',
})
export class EscuelasEndpoints implements OnInit{
  public EscuelasResults$! : Observable<Escuela[]>;

  public dataSource = new MatTableDataSource<Escuela>();
  public displayColumn : string[] = ['claveEscuela','nombre','idNivelEducativo','municipioLocalidad','detalles','editar'];
  constructor(private service: EscuelasService){ }

  ngOnInit(): void {
    this.getAllEscuelas();
  }
  getAllEscuelas(){
    this.service.getAllEscuelas().subscribe(respone =>{
      this.dataSource.data = respone;
    });
  }
}
