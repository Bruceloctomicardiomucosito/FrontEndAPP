import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Materia } from '../../interfaces/iMateria';
import { MateriasService } from '../services/materias';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-materias-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './materias-endpoints.html',
  styleUrl: './materias-endpoints.css',
})
export class MateriasEndpoints implements OnInit{
  public MateriasResults$! : Observable<Materia[]>;
  public dataSource = new MatTableDataSource<Materia>();
  public displayColumn : string[] = ['idMateria','idLicenciatura','nombre','semestre','statusMateria','detalles','editar'];
  constructor(private service: MateriasService){ }

  ngOnInit(): void {
    this.getAllMaterias();
  }

  getAllMaterias(){
    this.service.getAllMaterias().subscribe(
      response =>{
        this.dataSource.data = response;
    });
  }
}
