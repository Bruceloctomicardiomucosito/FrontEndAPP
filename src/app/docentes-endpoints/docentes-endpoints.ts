import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Docente } from '../../interfaces/iDocente';
import { DocentesService } from '../services/docentes';
import { AsyncPipe } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-docentes-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './docentes-endpoints.html',
  styleUrl: './docentes-endpoints.css',
})
export class DocentesEndpoints implements OnInit{
  public DocentesResults$! : Observable<Docente[]>;

  public dataSource = new MatTableDataSource<Docente>();

  public displayColumn: string[] = ['idDocente','codigoDocente','nombre','apellidoPaterno','apellidoMaterno','fechaNacimiento','sexo','editar'];

  constructor(private service:DocentesService){ }

  ngOnInit(): void {
    this.getAllDocentes();
  }

  getAllDocentes(){
    this.service.getAllDocentes().subscribe(response =>{
      this.dataSource.data = response;
    });
  }
}
