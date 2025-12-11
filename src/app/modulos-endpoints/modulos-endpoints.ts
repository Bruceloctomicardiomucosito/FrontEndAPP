import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Modulo } from '../../interfaces/iModulo';
import { AsyncPipe } from '@angular/common';
import { ModuloService } from '../services/modulos';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-modulos-endpoints',
  standalone : true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './modulos-endpoints.html',
  styleUrl: './modulos-endpoints.css',
})
export class ModulosEndpoints implements OnInit{
  public ModulosResults$! : Observable<Modulo[]>
  public dataSource = new MatTableDataSource<Modulo>()
  public displayColumn : string[] = ['idModulo', 'nombre', 'detalles','editar'];
  constructor(private service : ModuloService){ }
  
  ngOnInit(): void {
    this.getAllModulos();    
  }
  getAllModulos()
  {
    this.service.getAllAlumnos().subscribe(response =>{
      this.dataSource.data = response;
    });
  }
}
