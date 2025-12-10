import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Aula } from '../../interfaces/iAula';
import { AulasService } from '../services/aulas';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-aulas-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './aulas-endpoints.html',
  styleUrl: './aulas-endpoints.css',
})
export class AulasEndpoints implements OnInit{
  public AulasResults$! : Observable<Aula[]>;
  public dataSource = new MatTableDataSource<Aula>();
  public displayColumn: string[] = ['idAula','idEdificio','observaciones','editar'];
  public rspuesta: any;
  constructor(private service: AulasService){ }

  ngOnInit(): void {
    this.service.getAllAulas().subscribe(response => {
      console.log(response);
      this.dataSource.data = response;
    });
  }

}
