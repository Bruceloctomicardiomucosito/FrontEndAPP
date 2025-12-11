import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Grupo } from '../../interfaces/iGrupo';
import { GruposService } from '../services/grupos';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCard, MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-grupos-endpoints',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, MatCardModule],
  templateUrl: './grupos-endpoints.html',
  styleUrl: './grupos-endpoints.css',
})
export class GruposEndpoints implements OnInit {
  public GruposResults$! : Observable<Grupo[]>
  public dataSource = new MatTableDataSource<Grupo>();
  public displayColumn : string[] = ['idGrupo','nombre','detalles','editar'];
  constructor(private service: GruposService){ }
  ngOnInit(): void {
    this.getAllGrupos();
  }
  getAllGrupos(){
    this.service.getAllGrupos().subscribe(response => {
      this.dataSource.data = response;
    });
  }
}
