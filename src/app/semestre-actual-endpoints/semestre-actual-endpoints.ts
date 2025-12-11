import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SemestreActualService } from '../services/semestre-actual';
import { SemestreActual } from '../../interfaces/iSemestreActual';

@Component({
  selector: 'app-semestre-actual-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './semestre-actual-endpoints.html',
  styleUrl: './semestre-actual-endpoints.css',
})
export class SemestreActualEndpoints implements OnInit{
  public dataSource = new MatTableDataSource<SemestreActual>();
  public displayColumn : string[] = ["idSemestreActual",'nombre','descripcion','fechaInicio','fechaFin','detalles','editar'];
  constructor(private service : SemestreActualService){ }

  public ngOnInit(): void {
    this.getAllSemestres()
  }

  getAllSemestres(){
    this.service.getAllSemestres().subscribe(response =>{
      this.dataSource.data = response;
    });
  }
}
